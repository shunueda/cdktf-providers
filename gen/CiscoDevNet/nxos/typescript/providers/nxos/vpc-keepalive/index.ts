// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_keepalive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcKeepaliveConfig extends cdktf.TerraformMetaArguments {
  /**
  * vPC Keepalive destination address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_keepalive#destination_ip VpcKeepalive#destination_ip}
  */
  readonly destinationIp: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_keepalive#device VpcKeepalive#device}
  */
  readonly device?: string;
  /**
  * vPC Keepalive flush timeout.
  *   - Range: `3`-`10`
  *   - Default value: `3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_keepalive#flush_timeout VpcKeepalive#flush_timeout}
  */
  readonly flushTimeout?: number;
  /**
  * vPC Keepalive interval.
  *   - Range: `400`-`10000`
  *   - Default value: `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_keepalive#interval VpcKeepalive#interval}
  */
  readonly interval?: number;
  /**
  * vPC Keepalive precedence type. `0` - network, `1` - internet, `2` - critical, `3` flash-override, `4` - flash, `5` - immediate, `6` - prioriy, `7` - routine.
  *   - Range: `0`-`7`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_keepalive#precedence_type VpcKeepalive#precedence_type}
  */
  readonly precedenceType?: number;
  /**
  * vPC Keepalive precedence value.
  *   - Range: `0`-`7`
  *   - Default value: `6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_keepalive#precedence_value VpcKeepalive#precedence_value}
  */
  readonly precedenceValue?: number;
  /**
  * vPC Keepalive source address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_keepalive#source_ip VpcKeepalive#source_ip}
  */
  readonly sourceIp: string;
  /**
  * vPC Keepalive timeout.
  *   - Range: `3`-`20`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_keepalive#timeout VpcKeepalive#timeout}
  */
  readonly timeout?: number;
  /**
  * vPC Keepalive type of service (ToS) byte.
  *   - Range: `0`-`255`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_keepalive#type_of_service_byte VpcKeepalive#type_of_service_byte}
  */
  readonly typeOfServiceByte?: number;
  /**
  * vPC Keepalive type of service (ToS) configuration type. `0` - noCfg, `1` - tos-byte, `2` - tos-value, `3` - tos-type, `4` -  precedence-type, `5` - precedence-value.
  *   - Range: `0`-`5`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_keepalive#type_of_service_configuration_type VpcKeepalive#type_of_service_configuration_type}
  */
  readonly typeOfServiceConfigurationType?: number;
  /**
  * vPC Keepalive type of service (ToS) type. `0` - min-delay, `1` - max-throughput, `2` - max-reliability, `3` - min-monetary-cost, `4` -  normal.
  *   - Range: `0`-`4`
  *   - Default value: `4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_keepalive#type_of_service_type VpcKeepalive#type_of_service_type}
  */
  readonly typeOfServiceType?: number;
  /**
  * vPC Keepalive type of service (ToS) value.
  *   - Range: `0`-`15`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_keepalive#type_of_service_value VpcKeepalive#type_of_service_value}
  */
  readonly typeOfServiceValue?: number;
  /**
  * vPC Keepalive UDP port.
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_keepalive#udp_port VpcKeepalive#udp_port}
  */
  readonly udpPort?: number;
  /**
  * vPC Keepalive VRF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_keepalive#vrf VpcKeepalive#vrf}
  */
  readonly vrf?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_keepalive nxos_vpc_keepalive}
*/
export class VpcKeepalive extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_vpc_keepalive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcKeepalive resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcKeepalive to import
  * @param importFromId The id of the existing VpcKeepalive that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_keepalive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcKeepalive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_vpc_keepalive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_keepalive nxos_vpc_keepalive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcKeepaliveConfig
  */
  public constructor(scope: Construct, id: string, config: VpcKeepaliveConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_vpc_keepalive',
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
    this._destinationIp = config.destinationIp;
    this._device = config.device;
    this._flushTimeout = config.flushTimeout;
    this._interval = config.interval;
    this._precedenceType = config.precedenceType;
    this._precedenceValue = config.precedenceValue;
    this._sourceIp = config.sourceIp;
    this._timeout = config.timeout;
    this._typeOfServiceByte = config.typeOfServiceByte;
    this._typeOfServiceConfigurationType = config.typeOfServiceConfigurationType;
    this._typeOfServiceType = config.typeOfServiceType;
    this._typeOfServiceValue = config.typeOfServiceValue;
    this._udpPort = config.udpPort;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_ip - computed: false, optional: false, required: true
  private _destinationIp?: string; 
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }
  public set destinationIp(value: string) {
    this._destinationIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpInput() {
    return this._destinationIp;
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

  // flush_timeout - computed: true, optional: true, required: false
  private _flushTimeout?: number; 
  public get flushTimeout() {
    return this.getNumberAttribute('flush_timeout');
  }
  public set flushTimeout(value: number) {
    this._flushTimeout = value;
  }
  public resetFlushTimeout() {
    this._flushTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushTimeoutInput() {
    return this._flushTimeout;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // precedence_type - computed: true, optional: true, required: false
  private _precedenceType?: number; 
  public get precedenceType() {
    return this.getNumberAttribute('precedence_type');
  }
  public set precedenceType(value: number) {
    this._precedenceType = value;
  }
  public resetPrecedenceType() {
    this._precedenceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceTypeInput() {
    return this._precedenceType;
  }

  // precedence_value - computed: true, optional: true, required: false
  private _precedenceValue?: number; 
  public get precedenceValue() {
    return this.getNumberAttribute('precedence_value');
  }
  public set precedenceValue(value: number) {
    this._precedenceValue = value;
  }
  public resetPrecedenceValue() {
    this._precedenceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceValueInput() {
    return this._precedenceValue;
  }

  // source_ip - computed: false, optional: false, required: true
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // type_of_service_byte - computed: true, optional: true, required: false
  private _typeOfServiceByte?: number; 
  public get typeOfServiceByte() {
    return this.getNumberAttribute('type_of_service_byte');
  }
  public set typeOfServiceByte(value: number) {
    this._typeOfServiceByte = value;
  }
  public resetTypeOfServiceByte() {
    this._typeOfServiceByte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOfServiceByteInput() {
    return this._typeOfServiceByte;
  }

  // type_of_service_configuration_type - computed: true, optional: true, required: false
  private _typeOfServiceConfigurationType?: number; 
  public get typeOfServiceConfigurationType() {
    return this.getNumberAttribute('type_of_service_configuration_type');
  }
  public set typeOfServiceConfigurationType(value: number) {
    this._typeOfServiceConfigurationType = value;
  }
  public resetTypeOfServiceConfigurationType() {
    this._typeOfServiceConfigurationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOfServiceConfigurationTypeInput() {
    return this._typeOfServiceConfigurationType;
  }

  // type_of_service_type - computed: true, optional: true, required: false
  private _typeOfServiceType?: number; 
  public get typeOfServiceType() {
    return this.getNumberAttribute('type_of_service_type');
  }
  public set typeOfServiceType(value: number) {
    this._typeOfServiceType = value;
  }
  public resetTypeOfServiceType() {
    this._typeOfServiceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOfServiceTypeInput() {
    return this._typeOfServiceType;
  }

  // type_of_service_value - computed: true, optional: true, required: false
  private _typeOfServiceValue?: number; 
  public get typeOfServiceValue() {
    return this.getNumberAttribute('type_of_service_value');
  }
  public set typeOfServiceValue(value: number) {
    this._typeOfServiceValue = value;
  }
  public resetTypeOfServiceValue() {
    this._typeOfServiceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOfServiceValueInput() {
    return this._typeOfServiceValue;
  }

  // udp_port - computed: false, optional: true, required: false
  private _udpPort?: number; 
  public get udpPort() {
    return this.getNumberAttribute('udp_port');
  }
  public set udpPort(value: number) {
    this._udpPort = value;
  }
  public resetUdpPort() {
    this._udpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortInput() {
    return this._udpPort;
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
      destination_ip: cdktf.stringToTerraform(this._destinationIp),
      device: cdktf.stringToTerraform(this._device),
      flush_timeout: cdktf.numberToTerraform(this._flushTimeout),
      interval: cdktf.numberToTerraform(this._interval),
      precedence_type: cdktf.numberToTerraform(this._precedenceType),
      precedence_value: cdktf.numberToTerraform(this._precedenceValue),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      timeout: cdktf.numberToTerraform(this._timeout),
      type_of_service_byte: cdktf.numberToTerraform(this._typeOfServiceByte),
      type_of_service_configuration_type: cdktf.numberToTerraform(this._typeOfServiceConfigurationType),
      type_of_service_type: cdktf.numberToTerraform(this._typeOfServiceType),
      type_of_service_value: cdktf.numberToTerraform(this._typeOfServiceValue),
      udp_port: cdktf.numberToTerraform(this._udpPort),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_ip: {
        value: cdktf.stringToHclTerraform(this._destinationIp),
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
      flush_timeout: {
        value: cdktf.numberToHclTerraform(this._flushTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      precedence_type: {
        value: cdktf.numberToHclTerraform(this._precedenceType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      precedence_value: {
        value: cdktf.numberToHclTerraform(this._precedenceValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type_of_service_byte: {
        value: cdktf.numberToHclTerraform(this._typeOfServiceByte),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type_of_service_configuration_type: {
        value: cdktf.numberToHclTerraform(this._typeOfServiceConfigurationType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type_of_service_type: {
        value: cdktf.numberToHclTerraform(this._typeOfServiceType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type_of_service_value: {
        value: cdktf.numberToHclTerraform(this._typeOfServiceValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_port: {
        value: cdktf.numberToHclTerraform(this._udpPort),
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
