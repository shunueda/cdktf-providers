// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/sla
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlaConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/sla#device Sla#device}
  */
  readonly device?: string;
  /**
  * Entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/sla#entries Sla#entries}
  */
  readonly entries?: SlaEntries[] | cdktf.IResolvable;
  /**
  * Schedules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/sla#schedules Sla#schedules}
  */
  readonly schedules?: SlaSchedules[] | cdktf.IResolvable;
}
export interface SlaEntries {
  /**
  * Destination IP address or hostname, broadcast disallowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/sla#icmp_echo_destination Sla#icmp_echo_destination}
  */
  readonly icmpEchoDestination?: string;
  /**
  * Source Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/sla#icmp_echo_source_ip Sla#icmp_echo_source_ip}
  */
  readonly icmpEchoSourceIp?: string;
  /**
  * Entry Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/sla#number Sla#number}
  */
  readonly number: number;
}

export function slaEntriesToTerraform(struct?: SlaEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_echo_destination: cdktf.stringToTerraform(struct!.icmpEchoDestination),
    icmp_echo_source_ip: cdktf.stringToTerraform(struct!.icmpEchoSourceIp),
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function slaEntriesToHclTerraform(struct?: SlaEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_echo_destination: {
      value: cdktf.stringToHclTerraform(struct!.icmpEchoDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_echo_source_ip: {
      value: cdktf.stringToHclTerraform(struct!.icmpEchoSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlaEntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SlaEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpEchoDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpEchoDestination = this._icmpEchoDestination;
    }
    if (this._icmpEchoSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpEchoSourceIp = this._icmpEchoSourceIp;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlaEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmpEchoDestination = undefined;
      this._icmpEchoSourceIp = undefined;
      this._number = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmpEchoDestination = value.icmpEchoDestination;
      this._icmpEchoSourceIp = value.icmpEchoSourceIp;
      this._number = value.number;
    }
  }

  // icmp_echo_destination - computed: false, optional: true, required: false
  private _icmpEchoDestination?: string; 
  public get icmpEchoDestination() {
    return this.getStringAttribute('icmp_echo_destination');
  }
  public set icmpEchoDestination(value: string) {
    this._icmpEchoDestination = value;
  }
  public resetIcmpEchoDestination() {
    this._icmpEchoDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpEchoDestinationInput() {
    return this._icmpEchoDestination;
  }

  // icmp_echo_source_ip - computed: false, optional: true, required: false
  private _icmpEchoSourceIp?: string; 
  public get icmpEchoSourceIp() {
    return this.getStringAttribute('icmp_echo_source_ip');
  }
  public set icmpEchoSourceIp(value: string) {
    this._icmpEchoSourceIp = value;
  }
  public resetIcmpEchoSourceIp() {
    this._icmpEchoSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpEchoSourceIpInput() {
    return this._icmpEchoSourceIp;
  }

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}

export class SlaEntriesList extends cdktf.ComplexList {
  public internalValue? : SlaEntries[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SlaEntriesOutputReference {
    return new SlaEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlaSchedules {
  /**
  * Entry number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/sla#entry_number Sla#entry_number}
  */
  readonly entryNumber: number;
  /**
  * Length of time to execute in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/sla#life Sla#life}
  */
  readonly life?: number;
  /**
  * Start now
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/sla#start_time_now Sla#start_time_now}
  */
  readonly startTimeNow?: boolean | cdktf.IResolvable;
}

export function slaSchedulesToTerraform(struct?: SlaSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_number: cdktf.numberToTerraform(struct!.entryNumber),
    life: cdktf.numberToTerraform(struct!.life),
    start_time_now: cdktf.booleanToTerraform(struct!.startTimeNow),
  }
}


export function slaSchedulesToHclTerraform(struct?: SlaSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_number: {
      value: cdktf.numberToHclTerraform(struct!.entryNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    life: {
      value: cdktf.numberToHclTerraform(struct!.life),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time_now: {
      value: cdktf.booleanToHclTerraform(struct!.startTimeNow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlaSchedulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SlaSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryNumber = this._entryNumber;
    }
    if (this._life !== undefined) {
      hasAnyValues = true;
      internalValueResult.life = this._life;
    }
    if (this._startTimeNow !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeNow = this._startTimeNow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlaSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entryNumber = undefined;
      this._life = undefined;
      this._startTimeNow = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entryNumber = value.entryNumber;
      this._life = value.life;
      this._startTimeNow = value.startTimeNow;
    }
  }

  // entry_number - computed: false, optional: false, required: true
  private _entryNumber?: number; 
  public get entryNumber() {
    return this.getNumberAttribute('entry_number');
  }
  public set entryNumber(value: number) {
    this._entryNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryNumberInput() {
    return this._entryNumber;
  }

  // life - computed: false, optional: true, required: false
  private _life?: number; 
  public get life() {
    return this.getNumberAttribute('life');
  }
  public set life(value: number) {
    this._life = value;
  }
  public resetLife() {
    this._life = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifeInput() {
    return this._life;
  }

  // start_time_now - computed: false, optional: true, required: false
  private _startTimeNow?: boolean | cdktf.IResolvable; 
  public get startTimeNow() {
    return this.getBooleanAttribute('start_time_now');
  }
  public set startTimeNow(value: boolean | cdktf.IResolvable) {
    this._startTimeNow = value;
  }
  public resetStartTimeNow() {
    this._startTimeNow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeNowInput() {
    return this._startTimeNow;
  }
}

export class SlaSchedulesList extends cdktf.ComplexList {
  public internalValue? : SlaSchedules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SlaSchedulesOutputReference {
    return new SlaSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/sla iosxe_sla}
*/
export class Sla extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_sla";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sla resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sla to import
  * @param importFromId The id of the existing Sla that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/sla#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sla to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_sla", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/sla iosxe_sla} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_sla',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._entries.internalValue = config.entries;
    this._schedules.internalValue = config.schedules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // entries - computed: false, optional: true, required: false
  private _entries = new SlaEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: SlaEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schedules - computed: false, optional: true, required: false
  private _schedules = new SlaSchedulesList(this, "schedules", false);
  public get schedules() {
    return this._schedules;
  }
  public putSchedules(value: SlaSchedules[] | cdktf.IResolvable) {
    this._schedules.internalValue = value;
  }
  public resetSchedules() {
    this._schedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      entries: cdktf.listMapper(slaEntriesToTerraform, false)(this._entries.internalValue),
      schedules: cdktf.listMapper(slaSchedulesToTerraform, false)(this._schedules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entries: {
        value: cdktf.listMapperHcl(slaEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlaEntriesList",
      },
      schedules: {
        value: cdktf.listMapperHcl(slaSchedulesToHclTerraform, false)(this._schedules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlaSchedulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
