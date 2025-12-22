// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/evpn_ethernet_segment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EvpnEthernetSegmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/evpn_ethernet_segment#device EvpnEthernetSegment#device}
  */
  readonly device?: string;
  /**
  * 
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/evpn_ethernet_segment#df_election_wait_time EvpnEthernetSegment#df_election_wait_time}
  */
  readonly dfElectionWaitTime?: number;
  /**
  * Ethernet segment local discriminator value
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/evpn_ethernet_segment#es_value EvpnEthernetSegment#es_value}
  */
  readonly esValue: number;
  /**
  * Ethernet Segment Identifier type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/evpn_ethernet_segment#identifier_types EvpnEthernetSegment#identifier_types}
  */
  readonly identifierTypes?: EvpnEthernetSegmentIdentifierTypes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/evpn_ethernet_segment#redundancy_all_active EvpnEthernetSegment#redundancy_all_active}
  */
  readonly redundancyAllActive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/evpn_ethernet_segment#redundancy_single_active EvpnEthernetSegment#redundancy_single_active}
  */
  readonly redundancySingleActive?: boolean | cdktf.IResolvable;
}
export interface EvpnEthernetSegmentIdentifierTypes {
  /**
  * H.H.H.H.H.H.H.H.H 	9-octet ESI value in hex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/evpn_ethernet_segment#hex_string EvpnEthernetSegment#hex_string}
  */
  readonly hexString?: string;
  /**
  * System MAC address for generating the ESI value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/evpn_ethernet_segment#system_mac EvpnEthernetSegment#system_mac}
  */
  readonly systemMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/evpn_ethernet_segment#type EvpnEthernetSegment#type}
  */
  readonly type: number;
}

export function evpnEthernetSegmentIdentifierTypesToTerraform(struct?: EvpnEthernetSegmentIdentifierTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hex_string: cdktf.stringToTerraform(struct!.hexString),
    system_mac: cdktf.stringToTerraform(struct!.systemMac),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function evpnEthernetSegmentIdentifierTypesToHclTerraform(struct?: EvpnEthernetSegmentIdentifierTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hex_string: {
      value: cdktf.stringToHclTerraform(struct!.hexString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_mac: {
      value: cdktf.stringToHclTerraform(struct!.systemMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvpnEthernetSegmentIdentifierTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvpnEthernetSegmentIdentifierTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hexString !== undefined) {
      hasAnyValues = true;
      internalValueResult.hexString = this._hexString;
    }
    if (this._systemMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemMac = this._systemMac;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvpnEthernetSegmentIdentifierTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hexString = undefined;
      this._systemMac = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hexString = value.hexString;
      this._systemMac = value.systemMac;
      this._type = value.type;
    }
  }

  // hex_string - computed: false, optional: true, required: false
  private _hexString?: string; 
  public get hexString() {
    return this.getStringAttribute('hex_string');
  }
  public set hexString(value: string) {
    this._hexString = value;
  }
  public resetHexString() {
    this._hexString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hexStringInput() {
    return this._hexString;
  }

  // system_mac - computed: false, optional: true, required: false
  private _systemMac?: string; 
  public get systemMac() {
    return this.getStringAttribute('system_mac');
  }
  public set systemMac(value: string) {
    this._systemMac = value;
  }
  public resetSystemMac() {
    this._systemMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemMacInput() {
    return this._systemMac;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class EvpnEthernetSegmentIdentifierTypesList extends cdktf.ComplexList {
  public internalValue? : EvpnEthernetSegmentIdentifierTypes[] | cdktf.IResolvable

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
  public get(index: number): EvpnEthernetSegmentIdentifierTypesOutputReference {
    return new EvpnEthernetSegmentIdentifierTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/evpn_ethernet_segment iosxe_evpn_ethernet_segment}
*/
export class EvpnEthernetSegment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_evpn_ethernet_segment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EvpnEthernetSegment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EvpnEthernetSegment to import
  * @param importFromId The id of the existing EvpnEthernetSegment that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/evpn_ethernet_segment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EvpnEthernetSegment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_evpn_ethernet_segment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/evpn_ethernet_segment iosxe_evpn_ethernet_segment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EvpnEthernetSegmentConfig
  */
  public constructor(scope: Construct, id: string, config: EvpnEthernetSegmentConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_evpn_ethernet_segment',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
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
    this._dfElectionWaitTime = config.dfElectionWaitTime;
    this._esValue = config.esValue;
    this._identifierTypes.internalValue = config.identifierTypes;
    this._redundancyAllActive = config.redundancyAllActive;
    this._redundancySingleActive = config.redundancySingleActive;
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

  // df_election_wait_time - computed: false, optional: true, required: false
  private _dfElectionWaitTime?: number; 
  public get dfElectionWaitTime() {
    return this.getNumberAttribute('df_election_wait_time');
  }
  public set dfElectionWaitTime(value: number) {
    this._dfElectionWaitTime = value;
  }
  public resetDfElectionWaitTime() {
    this._dfElectionWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfElectionWaitTimeInput() {
    return this._dfElectionWaitTime;
  }

  // es_value - computed: false, optional: false, required: true
  private _esValue?: number; 
  public get esValue() {
    return this.getNumberAttribute('es_value');
  }
  public set esValue(value: number) {
    this._esValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get esValueInput() {
    return this._esValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier_types - computed: false, optional: true, required: false
  private _identifierTypes = new EvpnEthernetSegmentIdentifierTypesList(this, "identifier_types", false);
  public get identifierTypes() {
    return this._identifierTypes;
  }
  public putIdentifierTypes(value: EvpnEthernetSegmentIdentifierTypes[] | cdktf.IResolvable) {
    this._identifierTypes.internalValue = value;
  }
  public resetIdentifierTypes() {
    this._identifierTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierTypesInput() {
    return this._identifierTypes.internalValue;
  }

  // redundancy_all_active - computed: false, optional: true, required: false
  private _redundancyAllActive?: boolean | cdktf.IResolvable; 
  public get redundancyAllActive() {
    return this.getBooleanAttribute('redundancy_all_active');
  }
  public set redundancyAllActive(value: boolean | cdktf.IResolvable) {
    this._redundancyAllActive = value;
  }
  public resetRedundancyAllActive() {
    this._redundancyAllActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyAllActiveInput() {
    return this._redundancyAllActive;
  }

  // redundancy_single_active - computed: false, optional: true, required: false
  private _redundancySingleActive?: boolean | cdktf.IResolvable; 
  public get redundancySingleActive() {
    return this.getBooleanAttribute('redundancy_single_active');
  }
  public set redundancySingleActive(value: boolean | cdktf.IResolvable) {
    this._redundancySingleActive = value;
  }
  public resetRedundancySingleActive() {
    this._redundancySingleActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancySingleActiveInput() {
    return this._redundancySingleActive;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      df_election_wait_time: cdktf.numberToTerraform(this._dfElectionWaitTime),
      es_value: cdktf.numberToTerraform(this._esValue),
      identifier_types: cdktf.listMapper(evpnEthernetSegmentIdentifierTypesToTerraform, false)(this._identifierTypes.internalValue),
      redundancy_all_active: cdktf.booleanToTerraform(this._redundancyAllActive),
      redundancy_single_active: cdktf.booleanToTerraform(this._redundancySingleActive),
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
      df_election_wait_time: {
        value: cdktf.numberToHclTerraform(this._dfElectionWaitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      es_value: {
        value: cdktf.numberToHclTerraform(this._esValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      identifier_types: {
        value: cdktf.listMapperHcl(evpnEthernetSegmentIdentifierTypesToHclTerraform, false)(this._identifierTypes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvpnEthernetSegmentIdentifierTypesList",
      },
      redundancy_all_active: {
        value: cdktf.booleanToHclTerraform(this._redundancyAllActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redundancy_single_active: {
        value: cdktf.booleanToHclTerraform(this._redundancySingleActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
