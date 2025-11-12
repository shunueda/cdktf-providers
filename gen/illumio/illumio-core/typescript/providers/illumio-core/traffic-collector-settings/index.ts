// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/traffic_collector_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrafficCollectorSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * action for target traffic. Allowed values are "drop" or "aggregate"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/traffic_collector_settings#action TrafficCollectorSettings#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/traffic_collector_settings#id TrafficCollectorSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * transmission type. Allowed values are "broadcast" and "multicast"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/traffic_collector_settings#transmission TrafficCollectorSettings#transmission}
  */
  readonly transmission: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/traffic_collector_settings#target TrafficCollectorSettings#target}
  */
  readonly target?: TrafficCollectorSettingsTarget;
}
export interface TrafficCollectorSettingsTarget {
  /**
  * single IP address or CIDR. Default value: "0.0.0.0/0"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/traffic_collector_settings#dst_ip TrafficCollectorSettings#dst_ip}
  */
  readonly dstIp?: string;
  /**
  * destination port for target. Allowed range is -1 to 65535. Default value: -1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/traffic_collector_settings#dst_port TrafficCollectorSettings#dst_port}
  */
  readonly dstPort?: number;
  /**
  * protocol for target. Allowed values are 6 (TCP), 17 (UDP), 1 (ICMP) and 58 (ICMPv6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/traffic_collector_settings#proto TrafficCollectorSettings#proto}
  */
  readonly proto: number;
}

export function trafficCollectorSettingsTargetToTerraform(struct?: TrafficCollectorSettingsTargetOutputReference | TrafficCollectorSettingsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_ip: cdktf.stringToTerraform(struct!.dstIp),
    dst_port: cdktf.numberToTerraform(struct!.dstPort),
    proto: cdktf.numberToTerraform(struct!.proto),
  }
}


export function trafficCollectorSettingsTargetToHclTerraform(struct?: TrafficCollectorSettingsTargetOutputReference | TrafficCollectorSettingsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_ip: {
      value: cdktf.stringToHclTerraform(struct!.dstIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port: {
      value: cdktf.numberToHclTerraform(struct!.dstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proto: {
      value: cdktf.numberToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficCollectorSettingsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficCollectorSettingsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIp = this._dstIp;
    }
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficCollectorSettingsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstIp = undefined;
      this._dstPort = undefined;
      this._proto = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstIp = value.dstIp;
      this._dstPort = value.dstPort;
      this._proto = value.proto;
    }
  }

  // dst_ip - computed: false, optional: true, required: false
  private _dstIp?: string; 
  public get dstIp() {
    return this.getStringAttribute('dst_ip');
  }
  public set dstIp(value: string) {
    this._dstIp = value;
  }
  public resetDstIp() {
    this._dstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpInput() {
    return this._dstIp;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: number; 
  public get dstPort() {
    return this.getNumberAttribute('dst_port');
  }
  public set dstPort(value: number) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // proto - computed: false, optional: false, required: true
  private _proto?: number; 
  public get proto() {
    return this.getNumberAttribute('proto');
  }
  public set proto(value: number) {
    this._proto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/traffic_collector_settings illumio-core_traffic_collector_settings}
*/
export class TrafficCollectorSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_traffic_collector_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrafficCollectorSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrafficCollectorSettings to import
  * @param importFromId The id of the existing TrafficCollectorSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/traffic_collector_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrafficCollectorSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_traffic_collector_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/traffic_collector_settings illumio-core_traffic_collector_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrafficCollectorSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: TrafficCollectorSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_traffic_collector_settings',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._id = config.id;
    this._transmission = config.transmission;
    this._target.internalValue = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // transmission - computed: false, optional: false, required: true
  private _transmission?: string; 
  public get transmission() {
    return this.getStringAttribute('transmission');
  }
  public set transmission(value: string) {
    this._transmission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transmissionInput() {
    return this._transmission;
  }

  // target - computed: false, optional: true, required: false
  private _target = new TrafficCollectorSettingsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: TrafficCollectorSettingsTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      transmission: cdktf.stringToTerraform(this._transmission),
      target: trafficCollectorSettingsTargetToTerraform(this._target.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      transmission: {
        value: cdktf.stringToHclTerraform(this._transmission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: trafficCollectorSettingsTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrafficCollectorSettingsTargetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
