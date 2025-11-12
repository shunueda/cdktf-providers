// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_cpu_load_sharing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemCpuLoadSharingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable CPU load sharing in overload situations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_cpu_load_sharing#disable SystemCpuLoadSharingA#disable}
  */
  readonly disable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_cpu_load_sharing#id SystemCpuLoadSharingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Disallow redistribution of new non TCP/UDP IP sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_cpu_load_sharing#others SystemCpuLoadSharingA#others}
  */
  readonly others?: number;
  /**
  * Disallow redistribution of new TCP sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_cpu_load_sharing#tcp SystemCpuLoadSharingA#tcp}
  */
  readonly tcp?: number;
  /**
  * Disallow redistribution of new UDP sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_cpu_load_sharing#udp SystemCpuLoadSharingA#udp}
  */
  readonly udp?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_cpu_load_sharing#uuid SystemCpuLoadSharingA#uuid}
  */
  readonly uuid?: string;
  /**
  * cpu_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_cpu_load_sharing#cpu_usage SystemCpuLoadSharingA#cpu_usage}
  */
  readonly cpuUsage?: SystemCpuLoadSharingCpuUsageA;
  /**
  * packets_per_second block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_cpu_load_sharing#packets_per_second SystemCpuLoadSharingA#packets_per_second}
  */
  readonly packetsPerSecond?: SystemCpuLoadSharingPacketsPerSecondA;
}
export interface SystemCpuLoadSharingCpuUsageA {
  /**
  * CPU usage threshold (percentage) that will trigger the redistribution (default: 75)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_cpu_load_sharing#high SystemCpuLoadSharingA#high}
  */
  readonly high?: number;
  /**
  * CPU usage threshold (percentage) that will restore the normal packet distribution (default: 60)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_cpu_load_sharing#low SystemCpuLoadSharingA#low}
  */
  readonly low?: number;
}

export function systemCpuLoadSharingCpuUsageAToTerraform(struct?: SystemCpuLoadSharingCpuUsageAOutputReference | SystemCpuLoadSharingCpuUsageA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high: cdktf.numberToTerraform(struct!.high),
    low: cdktf.numberToTerraform(struct!.low),
  }
}


export function systemCpuLoadSharingCpuUsageAToHclTerraform(struct?: SystemCpuLoadSharingCpuUsageAOutputReference | SystemCpuLoadSharingCpuUsageA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high: {
      value: cdktf.numberToHclTerraform(struct!.high),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    low: {
      value: cdktf.numberToHclTerraform(struct!.low),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemCpuLoadSharingCpuUsageAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemCpuLoadSharingCpuUsageA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._high !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high;
    }
    if (this._low !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCpuLoadSharingCpuUsageA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._high = undefined;
      this._low = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._high = value.high;
      this._low = value.low;
    }
  }

  // high - computed: false, optional: true, required: false
  private _high?: number; 
  public get high() {
    return this.getNumberAttribute('high');
  }
  public set high(value: number) {
    this._high = value;
  }
  public resetHigh() {
    this._high = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high;
  }

  // low - computed: false, optional: true, required: false
  private _low?: number; 
  public get low() {
    return this.getNumberAttribute('low');
  }
  public set low(value: number) {
    this._low = value;
  }
  public resetLow() {
    this._low = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low;
  }
}
export interface SystemCpuLoadSharingPacketsPerSecondA {
  /**
  * Minimum packets-per-second threshold (per CPU) before redistribution will take effect (Minimum packets-per-second threshold (per CPU) before redistribution will take effect (default: 100000))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_cpu_load_sharing#min SystemCpuLoadSharingA#min}
  */
  readonly min?: number;
}

export function systemCpuLoadSharingPacketsPerSecondAToTerraform(struct?: SystemCpuLoadSharingPacketsPerSecondAOutputReference | SystemCpuLoadSharingPacketsPerSecondA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function systemCpuLoadSharingPacketsPerSecondAToHclTerraform(struct?: SystemCpuLoadSharingPacketsPerSecondAOutputReference | SystemCpuLoadSharingPacketsPerSecondA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemCpuLoadSharingPacketsPerSecondAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemCpuLoadSharingPacketsPerSecondA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCpuLoadSharingPacketsPerSecondA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._min = value.min;
    }
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_cpu_load_sharing thunder_system_cpu_load_sharing}
*/
export class SystemCpuLoadSharingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_cpu_load_sharing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemCpuLoadSharingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemCpuLoadSharingA to import
  * @param importFromId The id of the existing SystemCpuLoadSharingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_cpu_load_sharing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemCpuLoadSharingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_cpu_load_sharing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_cpu_load_sharing thunder_system_cpu_load_sharing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemCpuLoadSharingAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemCpuLoadSharingAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_cpu_load_sharing',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disable = config.disable;
    this._id = config.id;
    this._others = config.others;
    this._tcp = config.tcp;
    this._udp = config.udp;
    this._uuid = config.uuid;
    this._cpuUsage.internalValue = config.cpuUsage;
    this._packetsPerSecond.internalValue = config.packetsPerSecond;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // others - computed: false, optional: true, required: false
  private _others?: number; 
  public get others() {
    return this.getNumberAttribute('others');
  }
  public set others(value: number) {
    this._others = value;
  }
  public resetOthers() {
    this._others = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: number; 
  public get tcp() {
    return this.getNumberAttribute('tcp');
  }
  public set tcp(value: number) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: number; 
  public get udp() {
    return this.getNumberAttribute('udp');
  }
  public set udp(value: number) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
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

  // cpu_usage - computed: false, optional: true, required: false
  private _cpuUsage = new SystemCpuLoadSharingCpuUsageAOutputReference(this, "cpu_usage");
  public get cpuUsage() {
    return this._cpuUsage;
  }
  public putCpuUsage(value: SystemCpuLoadSharingCpuUsageA) {
    this._cpuUsage.internalValue = value;
  }
  public resetCpuUsage() {
    this._cpuUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUsageInput() {
    return this._cpuUsage.internalValue;
  }

  // packets_per_second - computed: false, optional: true, required: false
  private _packetsPerSecond = new SystemCpuLoadSharingPacketsPerSecondAOutputReference(this, "packets_per_second");
  public get packetsPerSecond() {
    return this._packetsPerSecond;
  }
  public putPacketsPerSecond(value: SystemCpuLoadSharingPacketsPerSecondA) {
    this._packetsPerSecond.internalValue = value;
  }
  public resetPacketsPerSecond() {
    this._packetsPerSecond.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsPerSecondInput() {
    return this._packetsPerSecond.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable: cdktf.numberToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      others: cdktf.numberToTerraform(this._others),
      tcp: cdktf.numberToTerraform(this._tcp),
      udp: cdktf.numberToTerraform(this._udp),
      uuid: cdktf.stringToTerraform(this._uuid),
      cpu_usage: systemCpuLoadSharingCpuUsageAToTerraform(this._cpuUsage.internalValue),
      packets_per_second: systemCpuLoadSharingPacketsPerSecondAToTerraform(this._packetsPerSecond.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable: {
        value: cdktf.numberToHclTerraform(this._disable),
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
      others: {
        value: cdktf.numberToHclTerraform(this._others),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp: {
        value: cdktf.numberToHclTerraform(this._tcp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp: {
        value: cdktf.numberToHclTerraform(this._udp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_usage: {
        value: systemCpuLoadSharingCpuUsageAToHclTerraform(this._cpuUsage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemCpuLoadSharingCpuUsageAList",
      },
      packets_per_second: {
        value: systemCpuLoadSharingPacketsPerSecondAToHclTerraform(this._packetsPerSecond.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemCpuLoadSharingPacketsPerSecondAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
