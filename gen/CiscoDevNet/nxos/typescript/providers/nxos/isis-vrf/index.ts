// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IsisVrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Administrative state.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf#admin_state IsisVrf#admin_state}
  */
  readonly adminState?: string;
  /**
  * Authentication Check for ISIS on Level-1.
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf#authentication_check_l1 IsisVrf#authentication_check_l1}
  */
  readonly authenticationCheckL1?: boolean | cdktf.IResolvable;
  /**
  * Authentication Check for ISIS on Level-2.
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf#authentication_check_l2 IsisVrf#authentication_check_l2}
  */
  readonly authenticationCheckL2?: boolean | cdktf.IResolvable;
  /**
  * Authentication Key for IS-IS on Level-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf#authentication_key_l1 IsisVrf#authentication_key_l1}
  */
  readonly authenticationKeyL1?: string;
  /**
  * Authentication Key for IS-IS on Level-2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf#authentication_key_l2 IsisVrf#authentication_key_l2}
  */
  readonly authenticationKeyL2?: string;
  /**
  * IS-IS Authentication-Type for Level-1.
  *   - Choices: `clear`, `md5`, `unknown`
  *   - Default value: `unknown`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf#authentication_type_l1 IsisVrf#authentication_type_l1}
  */
  readonly authenticationTypeL1?: string;
  /**
  * IS-IS Authentication-Type for Level-2.
  *   - Choices: `clear`, `md5`, `unknown`
  *   - Default value: `unknown`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf#authentication_type_l2 IsisVrf#authentication_type_l2}
  */
  readonly authenticationTypeL2?: string;
  /**
  * The IS-IS domain bandwidth reference. This sets the default reference bandwidth used for calculating the IS-IS cost metric.
  *   - Range: `0`-`4294967295`
  *   - Default value: `40000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf#bandwidth_reference IsisVrf#bandwidth_reference}
  */
  readonly bandwidthReference?: number;
  /**
  * Bandwidth reference unit.
  *   - Choices: `mbps`, `gbps`
  *   - Default value: `mbps`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf#banwidth_reference_unit IsisVrf#banwidth_reference_unit}
  */
  readonly banwidthReferenceUnit?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf#device IsisVrf#device}
  */
  readonly device?: string;
  /**
  * IS-IS instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf#instance_name IsisVrf#instance_name}
  */
  readonly instanceName: string;
  /**
  * IS-IS domain type.
  *   - Choices: `l1`, `l2`, `l12`
  *   - Default value: `l12`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf#is_type IsisVrf#is_type}
  */
  readonly isType?: string;
  /**
  * IS-IS metric type.
  *   - Choices: `narrow`, `wide`, `transition`
  *   - Default value: `wide`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf#metric_type IsisVrf#metric_type}
  */
  readonly metricType?: string;
  /**
  * The configuration of link-state packet (LSP) maximum transmission units (MTU) is supported. You can enable up to 4352 bytes.
  *   - Range: `256`-`4352`
  *   - Default value: `1492`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf#mtu IsisVrf#mtu}
  */
  readonly mtu?: number;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf#name IsisVrf#name}
  */
  readonly name: string;
  /**
  * Holds IS-IS domain NET (address) value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf#net IsisVrf#net}
  */
  readonly net?: string;
  /**
  * IS-IS Domain passive-interface default level.
  *   - Choices: `l1`, `l2`, `l12`, `unknown`
  *   - Default value: `unknown`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf#passive_default IsisVrf#passive_default}
  */
  readonly passiveDefault?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf nxos_isis_vrf}
*/
export class IsisVrf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_isis_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IsisVrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IsisVrf to import
  * @param importFromId The id of the existing IsisVrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IsisVrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_isis_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_vrf nxos_isis_vrf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IsisVrfConfig
  */
  public constructor(scope: Construct, id: string, config: IsisVrfConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_isis_vrf',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10',
        providerVersionConstraint: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminState = config.adminState;
    this._authenticationCheckL1 = config.authenticationCheckL1;
    this._authenticationCheckL2 = config.authenticationCheckL2;
    this._authenticationKeyL1 = config.authenticationKeyL1;
    this._authenticationKeyL2 = config.authenticationKeyL2;
    this._authenticationTypeL1 = config.authenticationTypeL1;
    this._authenticationTypeL2 = config.authenticationTypeL2;
    this._bandwidthReference = config.bandwidthReference;
    this._banwidthReferenceUnit = config.banwidthReferenceUnit;
    this._device = config.device;
    this._instanceName = config.instanceName;
    this._isType = config.isType;
    this._metricType = config.metricType;
    this._mtu = config.mtu;
    this._name = config.name;
    this._net = config.net;
    this._passiveDefault = config.passiveDefault;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state - computed: true, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
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

  // bandwidth_reference - computed: true, optional: true, required: false
  private _bandwidthReference?: number; 
  public get bandwidthReference() {
    return this.getNumberAttribute('bandwidth_reference');
  }
  public set bandwidthReference(value: number) {
    this._bandwidthReference = value;
  }
  public resetBandwidthReference() {
    this._bandwidthReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthReferenceInput() {
    return this._bandwidthReference;
  }

  // banwidth_reference_unit - computed: true, optional: true, required: false
  private _banwidthReferenceUnit?: string; 
  public get banwidthReferenceUnit() {
    return this.getStringAttribute('banwidth_reference_unit');
  }
  public set banwidthReferenceUnit(value: string) {
    this._banwidthReferenceUnit = value;
  }
  public resetBanwidthReferenceUnit() {
    this._banwidthReferenceUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get banwidthReferenceUnitInput() {
    return this._banwidthReferenceUnit;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // is_type - computed: true, optional: true, required: false
  private _isType?: string; 
  public get isType() {
    return this.getStringAttribute('is_type');
  }
  public set isType(value: string) {
    this._isType = value;
  }
  public resetIsType() {
    this._isType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTypeInput() {
    return this._isType;
  }

  // metric_type - computed: true, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // net - computed: false, optional: true, required: false
  private _net?: string; 
  public get net() {
    return this.getStringAttribute('net');
  }
  public set net(value: string) {
    this._net = value;
  }
  public resetNet() {
    this._net = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netInput() {
    return this._net;
  }

  // passive_default - computed: true, optional: true, required: false
  private _passiveDefault?: string; 
  public get passiveDefault() {
    return this.getStringAttribute('passive_default');
  }
  public set passiveDefault(value: string) {
    this._passiveDefault = value;
  }
  public resetPassiveDefault() {
    this._passiveDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveDefaultInput() {
    return this._passiveDefault;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state: cdktf.stringToTerraform(this._adminState),
      authentication_check_l1: cdktf.booleanToTerraform(this._authenticationCheckL1),
      authentication_check_l2: cdktf.booleanToTerraform(this._authenticationCheckL2),
      authentication_key_l1: cdktf.stringToTerraform(this._authenticationKeyL1),
      authentication_key_l2: cdktf.stringToTerraform(this._authenticationKeyL2),
      authentication_type_l1: cdktf.stringToTerraform(this._authenticationTypeL1),
      authentication_type_l2: cdktf.stringToTerraform(this._authenticationTypeL2),
      bandwidth_reference: cdktf.numberToTerraform(this._bandwidthReference),
      banwidth_reference_unit: cdktf.stringToTerraform(this._banwidthReferenceUnit),
      device: cdktf.stringToTerraform(this._device),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      is_type: cdktf.stringToTerraform(this._isType),
      metric_type: cdktf.stringToTerraform(this._metricType),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      net: cdktf.stringToTerraform(this._net),
      passive_default: cdktf.stringToTerraform(this._passiveDefault),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state: {
        value: cdktf.stringToHclTerraform(this._adminState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      bandwidth_reference: {
        value: cdktf.numberToHclTerraform(this._bandwidthReference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      banwidth_reference_unit: {
        value: cdktf.stringToHclTerraform(this._banwidthReferenceUnit),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_type: {
        value: cdktf.stringToHclTerraform(this._isType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_type: {
        value: cdktf.stringToHclTerraform(this._metricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
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
      net: {
        value: cdktf.stringToHclTerraform(this._net),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passive_default: {
        value: cdktf.stringToHclTerraform(this._passiveDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
