// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_source_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityNatSourcePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * CIDR address to source nat pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_source_pool#address SecurityNatSourcePool#address}
  */
  readonly address: string[];
  /**
  * Type of address pooling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_source_pool#address_pooling SecurityNatSourcePool#address_pooling}
  */
  readonly addressPooling?: string;
  /**
  * Text description of pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_source_pool#description SecurityNatSourcePool#description}
  */
  readonly description?: string;
  /**
  * Pool name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_source_pool#name SecurityNatSourcePool#name}
  */
  readonly name: string;
  /**
  * Lower threshold at which an SNMP trap is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_source_pool#pool_utilization_alarm_clear_threshold SecurityNatSourcePool#pool_utilization_alarm_clear_threshold}
  */
  readonly poolUtilizationAlarmClearThreshold?: number;
  /**
  * Upper threshold at which an SNMP trap is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_source_pool#pool_utilization_alarm_raise_threshold SecurityNatSourcePool#pool_utilization_alarm_raise_threshold}
  */
  readonly poolUtilizationAlarmRaiseThreshold?: number;
  /**
  * Do not perform port translation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_source_pool#port_no_translation SecurityNatSourcePool#port_no_translation}
  */
  readonly portNoTranslation?: boolean | cdktf.IResolvable;
  /**
  * Port overloading factor for each IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_source_pool#port_overloading_factor SecurityNatSourcePool#port_overloading_factor}
  */
  readonly portOverloadingFactor?: number;
  /**
  * Range of port to source nat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_source_pool#port_range SecurityNatSourcePool#port_range}
  */
  readonly portRange?: string;
  /**
  * Name of routing instance to switch instance with nat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_source_pool#routing_instance SecurityNatSourcePool#routing_instance}
  */
  readonly routingInstance?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_source_pool junos_security_nat_source_pool}
*/
export class SecurityNatSourcePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_nat_source_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityNatSourcePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityNatSourcePool to import
  * @param importFromId The id of the existing SecurityNatSourcePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_source_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityNatSourcePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_nat_source_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_source_pool junos_security_nat_source_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityNatSourcePoolConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityNatSourcePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_nat_source_pool',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._addressPooling = config.addressPooling;
    this._description = config.description;
    this._name = config.name;
    this._poolUtilizationAlarmClearThreshold = config.poolUtilizationAlarmClearThreshold;
    this._poolUtilizationAlarmRaiseThreshold = config.poolUtilizationAlarmRaiseThreshold;
    this._portNoTranslation = config.portNoTranslation;
    this._portOverloadingFactor = config.portOverloadingFactor;
    this._portRange = config.portRange;
    this._routingInstance = config.routingInstance;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string[]; 
  public get address() {
    return this.getListAttribute('address');
  }
  public set address(value: string[]) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_pooling - computed: false, optional: true, required: false
  private _addressPooling?: string; 
  public get addressPooling() {
    return this.getStringAttribute('address_pooling');
  }
  public set addressPooling(value: string) {
    this._addressPooling = value;
  }
  public resetAddressPooling() {
    this._addressPooling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPoolingInput() {
    return this._addressPooling;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // pool_utilization_alarm_clear_threshold - computed: false, optional: true, required: false
  private _poolUtilizationAlarmClearThreshold?: number; 
  public get poolUtilizationAlarmClearThreshold() {
    return this.getNumberAttribute('pool_utilization_alarm_clear_threshold');
  }
  public set poolUtilizationAlarmClearThreshold(value: number) {
    this._poolUtilizationAlarmClearThreshold = value;
  }
  public resetPoolUtilizationAlarmClearThreshold() {
    this._poolUtilizationAlarmClearThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolUtilizationAlarmClearThresholdInput() {
    return this._poolUtilizationAlarmClearThreshold;
  }

  // pool_utilization_alarm_raise_threshold - computed: false, optional: true, required: false
  private _poolUtilizationAlarmRaiseThreshold?: number; 
  public get poolUtilizationAlarmRaiseThreshold() {
    return this.getNumberAttribute('pool_utilization_alarm_raise_threshold');
  }
  public set poolUtilizationAlarmRaiseThreshold(value: number) {
    this._poolUtilizationAlarmRaiseThreshold = value;
  }
  public resetPoolUtilizationAlarmRaiseThreshold() {
    this._poolUtilizationAlarmRaiseThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolUtilizationAlarmRaiseThresholdInput() {
    return this._poolUtilizationAlarmRaiseThreshold;
  }

  // port_no_translation - computed: false, optional: true, required: false
  private _portNoTranslation?: boolean | cdktf.IResolvable; 
  public get portNoTranslation() {
    return this.getBooleanAttribute('port_no_translation');
  }
  public set portNoTranslation(value: boolean | cdktf.IResolvable) {
    this._portNoTranslation = value;
  }
  public resetPortNoTranslation() {
    this._portNoTranslation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNoTranslationInput() {
    return this._portNoTranslation;
  }

  // port_overloading_factor - computed: false, optional: true, required: false
  private _portOverloadingFactor?: number; 
  public get portOverloadingFactor() {
    return this.getNumberAttribute('port_overloading_factor');
  }
  public set portOverloadingFactor(value: number) {
    this._portOverloadingFactor = value;
  }
  public resetPortOverloadingFactor() {
    this._portOverloadingFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverloadingFactorInput() {
    return this._portOverloadingFactor;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange?: string; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string) {
    this._portRange = value;
  }
  public resetPortRange() {
    this._portRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._address),
      address_pooling: cdktf.stringToTerraform(this._addressPooling),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      pool_utilization_alarm_clear_threshold: cdktf.numberToTerraform(this._poolUtilizationAlarmClearThreshold),
      pool_utilization_alarm_raise_threshold: cdktf.numberToTerraform(this._poolUtilizationAlarmRaiseThreshold),
      port_no_translation: cdktf.booleanToTerraform(this._portNoTranslation),
      port_overloading_factor: cdktf.numberToTerraform(this._portOverloadingFactor),
      port_range: cdktf.stringToTerraform(this._portRange),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._address),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      address_pooling: {
        value: cdktf.stringToHclTerraform(this._addressPooling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      pool_utilization_alarm_clear_threshold: {
        value: cdktf.numberToHclTerraform(this._poolUtilizationAlarmClearThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pool_utilization_alarm_raise_threshold: {
        value: cdktf.numberToHclTerraform(this._poolUtilizationAlarmRaiseThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_no_translation: {
        value: cdktf.booleanToHclTerraform(this._portNoTranslation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_overloading_factor: {
        value: cdktf.numberToHclTerraform(this._portOverloadingFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_range: {
        value: cdktf.stringToHclTerraform(this._portRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
