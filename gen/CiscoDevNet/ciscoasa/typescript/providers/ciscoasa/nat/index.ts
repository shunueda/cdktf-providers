// https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#active Nat#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#block_allocation Nat#block_allocation}
  */
  readonly blockAllocation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#description Nat#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#dns Nat#dns}
  */
  readonly dns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#extended Nat#extended}
  */
  readonly extended?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#flat Nat#flat}
  */
  readonly flat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#id Nat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#include_reserve Nat#include_reserve}
  */
  readonly includeReserve?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#interface_pat Nat#interface_pat}
  */
  readonly interfacePat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#last_updated Nat#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#mode Nat#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#net_to_net Nat#net_to_net}
  */
  readonly netToNet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#no_proxy_arp Nat#no_proxy_arp}
  */
  readonly noProxyArp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#original_destination_kind Nat#original_destination_kind}
  */
  readonly originalDestinationKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#original_destination_value Nat#original_destination_value}
  */
  readonly originalDestinationValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#original_interface_name Nat#original_interface_name}
  */
  readonly originalInterfaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#original_service_kind Nat#original_service_kind}
  */
  readonly originalServiceKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#original_service_value Nat#original_service_value}
  */
  readonly originalServiceValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#original_source_kind Nat#original_source_kind}
  */
  readonly originalSourceKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#original_source_value Nat#original_source_value}
  */
  readonly originalSourceValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#pat_pool Nat#pat_pool}
  */
  readonly patPool?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#position Nat#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#round_robin Nat#round_robin}
  */
  readonly roundRobin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#route_lookup Nat#route_lookup}
  */
  readonly routeLookup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#section Nat#section}
  */
  readonly section: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#translated_destination_kind Nat#translated_destination_kind}
  */
  readonly translatedDestinationKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#translated_destination_value Nat#translated_destination_value}
  */
  readonly translatedDestinationValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#translated_interface_name Nat#translated_interface_name}
  */
  readonly translatedInterfaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#translated_service_kind Nat#translated_service_kind}
  */
  readonly translatedServiceKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#translated_service_value Nat#translated_service_value}
  */
  readonly translatedServiceValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#translated_source_kind Nat#translated_source_kind}
  */
  readonly translatedSourceKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#translated_source_pat_pool_kind Nat#translated_source_pat_pool_kind}
  */
  readonly translatedSourcePatPoolKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#translated_source_pat_pool_value Nat#translated_source_pat_pool_value}
  */
  readonly translatedSourcePatPoolValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#translated_source_value Nat#translated_source_value}
  */
  readonly translatedSourceValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#unidirectional Nat#unidirectional}
  */
  readonly unidirectional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#use_destination_interface_ipv6 Nat#use_destination_interface_ipv6}
  */
  readonly useDestinationInterfaceIpv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#use_source_interface_ipv6 Nat#use_source_interface_ipv6}
  */
  readonly useSourceInterfaceIpv6?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat ciscoasa_nat}
*/
export class Nat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscoasa_nat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nat to import
  * @param importFromId The id of the existing Nat that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscoasa_nat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/nat ciscoasa_nat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NatConfig
  */
  public constructor(scope: Construct, id: string, config: NatConfig) {
    super(scope, id, {
      terraformResourceType: 'ciscoasa_nat',
      terraformGeneratorMetadata: {
        providerName: 'ciscoasa',
        providerVersion: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._blockAllocation = config.blockAllocation;
    this._description = config.description;
    this._dns = config.dns;
    this._extended = config.extended;
    this._flat = config.flat;
    this._id = config.id;
    this._includeReserve = config.includeReserve;
    this._interfacePat = config.interfacePat;
    this._lastUpdated = config.lastUpdated;
    this._mode = config.mode;
    this._netToNet = config.netToNet;
    this._noProxyArp = config.noProxyArp;
    this._originalDestinationKind = config.originalDestinationKind;
    this._originalDestinationValue = config.originalDestinationValue;
    this._originalInterfaceName = config.originalInterfaceName;
    this._originalServiceKind = config.originalServiceKind;
    this._originalServiceValue = config.originalServiceValue;
    this._originalSourceKind = config.originalSourceKind;
    this._originalSourceValue = config.originalSourceValue;
    this._patPool = config.patPool;
    this._position = config.position;
    this._roundRobin = config.roundRobin;
    this._routeLookup = config.routeLookup;
    this._section = config.section;
    this._translatedDestinationKind = config.translatedDestinationKind;
    this._translatedDestinationValue = config.translatedDestinationValue;
    this._translatedInterfaceName = config.translatedInterfaceName;
    this._translatedServiceKind = config.translatedServiceKind;
    this._translatedServiceValue = config.translatedServiceValue;
    this._translatedSourceKind = config.translatedSourceKind;
    this._translatedSourcePatPoolKind = config.translatedSourcePatPoolKind;
    this._translatedSourcePatPoolValue = config.translatedSourcePatPoolValue;
    this._translatedSourceValue = config.translatedSourceValue;
    this._unidirectional = config.unidirectional;
    this._useDestinationInterfaceIpv6 = config.useDestinationInterfaceIpv6;
    this._useSourceInterfaceIpv6 = config.useSourceInterfaceIpv6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // block_allocation - computed: false, optional: true, required: false
  private _blockAllocation?: boolean | cdktf.IResolvable; 
  public get blockAllocation() {
    return this.getBooleanAttribute('block_allocation');
  }
  public set blockAllocation(value: boolean | cdktf.IResolvable) {
    this._blockAllocation = value;
  }
  public resetBlockAllocation() {
    this._blockAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockAllocationInput() {
    return this._blockAllocation;
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

  // dns - computed: false, optional: true, required: false
  private _dns?: boolean | cdktf.IResolvable; 
  public get dns() {
    return this.getBooleanAttribute('dns');
  }
  public set dns(value: boolean | cdktf.IResolvable) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // extended - computed: false, optional: true, required: false
  private _extended?: boolean | cdktf.IResolvable; 
  public get extended() {
    return this.getBooleanAttribute('extended');
  }
  public set extended(value: boolean | cdktf.IResolvable) {
    this._extended = value;
  }
  public resetExtended() {
    this._extended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedInput() {
    return this._extended;
  }

  // flat - computed: false, optional: true, required: false
  private _flat?: boolean | cdktf.IResolvable; 
  public get flat() {
    return this.getBooleanAttribute('flat');
  }
  public set flat(value: boolean | cdktf.IResolvable) {
    this._flat = value;
  }
  public resetFlat() {
    this._flat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flatInput() {
    return this._flat;
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

  // include_reserve - computed: false, optional: true, required: false
  private _includeReserve?: boolean | cdktf.IResolvable; 
  public get includeReserve() {
    return this.getBooleanAttribute('include_reserve');
  }
  public set includeReserve(value: boolean | cdktf.IResolvable) {
    this._includeReserve = value;
  }
  public resetIncludeReserve() {
    this._includeReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeReserveInput() {
    return this._includeReserve;
  }

  // interface_pat - computed: false, optional: true, required: false
  private _interfacePat?: boolean | cdktf.IResolvable; 
  public get interfacePat() {
    return this.getBooleanAttribute('interface_pat');
  }
  public set interfacePat(value: boolean | cdktf.IResolvable) {
    this._interfacePat = value;
  }
  public resetInterfacePat() {
    this._interfacePat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacePatInput() {
    return this._interfacePat;
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // net_to_net - computed: false, optional: true, required: false
  private _netToNet?: boolean | cdktf.IResolvable; 
  public get netToNet() {
    return this.getBooleanAttribute('net_to_net');
  }
  public set netToNet(value: boolean | cdktf.IResolvable) {
    this._netToNet = value;
  }
  public resetNetToNet() {
    this._netToNet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netToNetInput() {
    return this._netToNet;
  }

  // no_proxy_arp - computed: false, optional: true, required: false
  private _noProxyArp?: boolean | cdktf.IResolvable; 
  public get noProxyArp() {
    return this.getBooleanAttribute('no_proxy_arp');
  }
  public set noProxyArp(value: boolean | cdktf.IResolvable) {
    this._noProxyArp = value;
  }
  public resetNoProxyArp() {
    this._noProxyArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyArpInput() {
    return this._noProxyArp;
  }

  // original_destination_kind - computed: false, optional: true, required: false
  private _originalDestinationKind?: string; 
  public get originalDestinationKind() {
    return this.getStringAttribute('original_destination_kind');
  }
  public set originalDestinationKind(value: string) {
    this._originalDestinationKind = value;
  }
  public resetOriginalDestinationKind() {
    this._originalDestinationKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalDestinationKindInput() {
    return this._originalDestinationKind;
  }

  // original_destination_value - computed: false, optional: true, required: false
  private _originalDestinationValue?: string; 
  public get originalDestinationValue() {
    return this.getStringAttribute('original_destination_value');
  }
  public set originalDestinationValue(value: string) {
    this._originalDestinationValue = value;
  }
  public resetOriginalDestinationValue() {
    this._originalDestinationValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalDestinationValueInput() {
    return this._originalDestinationValue;
  }

  // original_interface_name - computed: false, optional: true, required: false
  private _originalInterfaceName?: string; 
  public get originalInterfaceName() {
    return this.getStringAttribute('original_interface_name');
  }
  public set originalInterfaceName(value: string) {
    this._originalInterfaceName = value;
  }
  public resetOriginalInterfaceName() {
    this._originalInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalInterfaceNameInput() {
    return this._originalInterfaceName;
  }

  // original_service_kind - computed: false, optional: true, required: false
  private _originalServiceKind?: string; 
  public get originalServiceKind() {
    return this.getStringAttribute('original_service_kind');
  }
  public set originalServiceKind(value: string) {
    this._originalServiceKind = value;
  }
  public resetOriginalServiceKind() {
    this._originalServiceKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalServiceKindInput() {
    return this._originalServiceKind;
  }

  // original_service_value - computed: false, optional: true, required: false
  private _originalServiceValue?: string; 
  public get originalServiceValue() {
    return this.getStringAttribute('original_service_value');
  }
  public set originalServiceValue(value: string) {
    this._originalServiceValue = value;
  }
  public resetOriginalServiceValue() {
    this._originalServiceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalServiceValueInput() {
    return this._originalServiceValue;
  }

  // original_source_kind - computed: false, optional: true, required: false
  private _originalSourceKind?: string; 
  public get originalSourceKind() {
    return this.getStringAttribute('original_source_kind');
  }
  public set originalSourceKind(value: string) {
    this._originalSourceKind = value;
  }
  public resetOriginalSourceKind() {
    this._originalSourceKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalSourceKindInput() {
    return this._originalSourceKind;
  }

  // original_source_value - computed: false, optional: true, required: false
  private _originalSourceValue?: string; 
  public get originalSourceValue() {
    return this.getStringAttribute('original_source_value');
  }
  public set originalSourceValue(value: string) {
    this._originalSourceValue = value;
  }
  public resetOriginalSourceValue() {
    this._originalSourceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalSourceValueInput() {
    return this._originalSourceValue;
  }

  // pat_pool - computed: false, optional: true, required: false
  private _patPool?: boolean | cdktf.IResolvable; 
  public get patPool() {
    return this.getBooleanAttribute('pat_pool');
  }
  public set patPool(value: boolean | cdktf.IResolvable) {
    this._patPool = value;
  }
  public resetPatPool() {
    this._patPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patPoolInput() {
    return this._patPool;
  }

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // round_robin - computed: false, optional: true, required: false
  private _roundRobin?: boolean | cdktf.IResolvable; 
  public get roundRobin() {
    return this.getBooleanAttribute('round_robin');
  }
  public set roundRobin(value: boolean | cdktf.IResolvable) {
    this._roundRobin = value;
  }
  public resetRoundRobin() {
    this._roundRobin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundRobinInput() {
    return this._roundRobin;
  }

  // route_lookup - computed: false, optional: true, required: false
  private _routeLookup?: boolean | cdktf.IResolvable; 
  public get routeLookup() {
    return this.getBooleanAttribute('route_lookup');
  }
  public set routeLookup(value: boolean | cdktf.IResolvable) {
    this._routeLookup = value;
  }
  public resetRouteLookup() {
    this._routeLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeLookupInput() {
    return this._routeLookup;
  }

  // section - computed: false, optional: false, required: true
  private _section?: string; 
  public get section() {
    return this.getStringAttribute('section');
  }
  public set section(value: string) {
    this._section = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionInput() {
    return this._section;
  }

  // translated_destination_kind - computed: false, optional: true, required: false
  private _translatedDestinationKind?: string; 
  public get translatedDestinationKind() {
    return this.getStringAttribute('translated_destination_kind');
  }
  public set translatedDestinationKind(value: string) {
    this._translatedDestinationKind = value;
  }
  public resetTranslatedDestinationKind() {
    this._translatedDestinationKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedDestinationKindInput() {
    return this._translatedDestinationKind;
  }

  // translated_destination_value - computed: false, optional: true, required: false
  private _translatedDestinationValue?: string; 
  public get translatedDestinationValue() {
    return this.getStringAttribute('translated_destination_value');
  }
  public set translatedDestinationValue(value: string) {
    this._translatedDestinationValue = value;
  }
  public resetTranslatedDestinationValue() {
    this._translatedDestinationValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedDestinationValueInput() {
    return this._translatedDestinationValue;
  }

  // translated_interface_name - computed: false, optional: true, required: false
  private _translatedInterfaceName?: string; 
  public get translatedInterfaceName() {
    return this.getStringAttribute('translated_interface_name');
  }
  public set translatedInterfaceName(value: string) {
    this._translatedInterfaceName = value;
  }
  public resetTranslatedInterfaceName() {
    this._translatedInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedInterfaceNameInput() {
    return this._translatedInterfaceName;
  }

  // translated_service_kind - computed: false, optional: true, required: false
  private _translatedServiceKind?: string; 
  public get translatedServiceKind() {
    return this.getStringAttribute('translated_service_kind');
  }
  public set translatedServiceKind(value: string) {
    this._translatedServiceKind = value;
  }
  public resetTranslatedServiceKind() {
    this._translatedServiceKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedServiceKindInput() {
    return this._translatedServiceKind;
  }

  // translated_service_value - computed: false, optional: true, required: false
  private _translatedServiceValue?: string; 
  public get translatedServiceValue() {
    return this.getStringAttribute('translated_service_value');
  }
  public set translatedServiceValue(value: string) {
    this._translatedServiceValue = value;
  }
  public resetTranslatedServiceValue() {
    this._translatedServiceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedServiceValueInput() {
    return this._translatedServiceValue;
  }

  // translated_source_kind - computed: false, optional: true, required: false
  private _translatedSourceKind?: string; 
  public get translatedSourceKind() {
    return this.getStringAttribute('translated_source_kind');
  }
  public set translatedSourceKind(value: string) {
    this._translatedSourceKind = value;
  }
  public resetTranslatedSourceKind() {
    this._translatedSourceKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedSourceKindInput() {
    return this._translatedSourceKind;
  }

  // translated_source_pat_pool_kind - computed: false, optional: true, required: false
  private _translatedSourcePatPoolKind?: string; 
  public get translatedSourcePatPoolKind() {
    return this.getStringAttribute('translated_source_pat_pool_kind');
  }
  public set translatedSourcePatPoolKind(value: string) {
    this._translatedSourcePatPoolKind = value;
  }
  public resetTranslatedSourcePatPoolKind() {
    this._translatedSourcePatPoolKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedSourcePatPoolKindInput() {
    return this._translatedSourcePatPoolKind;
  }

  // translated_source_pat_pool_value - computed: false, optional: true, required: false
  private _translatedSourcePatPoolValue?: string; 
  public get translatedSourcePatPoolValue() {
    return this.getStringAttribute('translated_source_pat_pool_value');
  }
  public set translatedSourcePatPoolValue(value: string) {
    this._translatedSourcePatPoolValue = value;
  }
  public resetTranslatedSourcePatPoolValue() {
    this._translatedSourcePatPoolValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedSourcePatPoolValueInput() {
    return this._translatedSourcePatPoolValue;
  }

  // translated_source_value - computed: false, optional: true, required: false
  private _translatedSourceValue?: string; 
  public get translatedSourceValue() {
    return this.getStringAttribute('translated_source_value');
  }
  public set translatedSourceValue(value: string) {
    this._translatedSourceValue = value;
  }
  public resetTranslatedSourceValue() {
    this._translatedSourceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedSourceValueInput() {
    return this._translatedSourceValue;
  }

  // unidirectional - computed: false, optional: true, required: false
  private _unidirectional?: boolean | cdktf.IResolvable; 
  public get unidirectional() {
    return this.getBooleanAttribute('unidirectional');
  }
  public set unidirectional(value: boolean | cdktf.IResolvable) {
    this._unidirectional = value;
  }
  public resetUnidirectional() {
    this._unidirectional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unidirectionalInput() {
    return this._unidirectional;
  }

  // use_destination_interface_ipv6 - computed: false, optional: true, required: false
  private _useDestinationInterfaceIpv6?: boolean | cdktf.IResolvable; 
  public get useDestinationInterfaceIpv6() {
    return this.getBooleanAttribute('use_destination_interface_ipv6');
  }
  public set useDestinationInterfaceIpv6(value: boolean | cdktf.IResolvable) {
    this._useDestinationInterfaceIpv6 = value;
  }
  public resetUseDestinationInterfaceIpv6() {
    this._useDestinationInterfaceIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDestinationInterfaceIpv6Input() {
    return this._useDestinationInterfaceIpv6;
  }

  // use_source_interface_ipv6 - computed: false, optional: true, required: false
  private _useSourceInterfaceIpv6?: boolean | cdktf.IResolvable; 
  public get useSourceInterfaceIpv6() {
    return this.getBooleanAttribute('use_source_interface_ipv6');
  }
  public set useSourceInterfaceIpv6(value: boolean | cdktf.IResolvable) {
    this._useSourceInterfaceIpv6 = value;
  }
  public resetUseSourceInterfaceIpv6() {
    this._useSourceInterfaceIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSourceInterfaceIpv6Input() {
    return this._useSourceInterfaceIpv6;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      block_allocation: cdktf.booleanToTerraform(this._blockAllocation),
      description: cdktf.stringToTerraform(this._description),
      dns: cdktf.booleanToTerraform(this._dns),
      extended: cdktf.booleanToTerraform(this._extended),
      flat: cdktf.booleanToTerraform(this._flat),
      id: cdktf.stringToTerraform(this._id),
      include_reserve: cdktf.booleanToTerraform(this._includeReserve),
      interface_pat: cdktf.booleanToTerraform(this._interfacePat),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      mode: cdktf.stringToTerraform(this._mode),
      net_to_net: cdktf.booleanToTerraform(this._netToNet),
      no_proxy_arp: cdktf.booleanToTerraform(this._noProxyArp),
      original_destination_kind: cdktf.stringToTerraform(this._originalDestinationKind),
      original_destination_value: cdktf.stringToTerraform(this._originalDestinationValue),
      original_interface_name: cdktf.stringToTerraform(this._originalInterfaceName),
      original_service_kind: cdktf.stringToTerraform(this._originalServiceKind),
      original_service_value: cdktf.stringToTerraform(this._originalServiceValue),
      original_source_kind: cdktf.stringToTerraform(this._originalSourceKind),
      original_source_value: cdktf.stringToTerraform(this._originalSourceValue),
      pat_pool: cdktf.booleanToTerraform(this._patPool),
      position: cdktf.numberToTerraform(this._position),
      round_robin: cdktf.booleanToTerraform(this._roundRobin),
      route_lookup: cdktf.booleanToTerraform(this._routeLookup),
      section: cdktf.stringToTerraform(this._section),
      translated_destination_kind: cdktf.stringToTerraform(this._translatedDestinationKind),
      translated_destination_value: cdktf.stringToTerraform(this._translatedDestinationValue),
      translated_interface_name: cdktf.stringToTerraform(this._translatedInterfaceName),
      translated_service_kind: cdktf.stringToTerraform(this._translatedServiceKind),
      translated_service_value: cdktf.stringToTerraform(this._translatedServiceValue),
      translated_source_kind: cdktf.stringToTerraform(this._translatedSourceKind),
      translated_source_pat_pool_kind: cdktf.stringToTerraform(this._translatedSourcePatPoolKind),
      translated_source_pat_pool_value: cdktf.stringToTerraform(this._translatedSourcePatPoolValue),
      translated_source_value: cdktf.stringToTerraform(this._translatedSourceValue),
      unidirectional: cdktf.booleanToTerraform(this._unidirectional),
      use_destination_interface_ipv6: cdktf.booleanToTerraform(this._useDestinationInterfaceIpv6),
      use_source_interface_ipv6: cdktf.booleanToTerraform(this._useSourceInterfaceIpv6),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_allocation: {
        value: cdktf.booleanToHclTerraform(this._blockAllocation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns: {
        value: cdktf.booleanToHclTerraform(this._dns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extended: {
        value: cdktf.booleanToHclTerraform(this._extended),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      flat: {
        value: cdktf.booleanToHclTerraform(this._flat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_reserve: {
        value: cdktf.booleanToHclTerraform(this._includeReserve),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_pat: {
        value: cdktf.booleanToHclTerraform(this._interfacePat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net_to_net: {
        value: cdktf.booleanToHclTerraform(this._netToNet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_proxy_arp: {
        value: cdktf.booleanToHclTerraform(this._noProxyArp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      original_destination_kind: {
        value: cdktf.stringToHclTerraform(this._originalDestinationKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      original_destination_value: {
        value: cdktf.stringToHclTerraform(this._originalDestinationValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      original_interface_name: {
        value: cdktf.stringToHclTerraform(this._originalInterfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      original_service_kind: {
        value: cdktf.stringToHclTerraform(this._originalServiceKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      original_service_value: {
        value: cdktf.stringToHclTerraform(this._originalServiceValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      original_source_kind: {
        value: cdktf.stringToHclTerraform(this._originalSourceKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      original_source_value: {
        value: cdktf.stringToHclTerraform(this._originalSourceValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pat_pool: {
        value: cdktf.booleanToHclTerraform(this._patPool),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      round_robin: {
        value: cdktf.booleanToHclTerraform(this._roundRobin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      route_lookup: {
        value: cdktf.booleanToHclTerraform(this._routeLookup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      section: {
        value: cdktf.stringToHclTerraform(this._section),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translated_destination_kind: {
        value: cdktf.stringToHclTerraform(this._translatedDestinationKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translated_destination_value: {
        value: cdktf.stringToHclTerraform(this._translatedDestinationValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translated_interface_name: {
        value: cdktf.stringToHclTerraform(this._translatedInterfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translated_service_kind: {
        value: cdktf.stringToHclTerraform(this._translatedServiceKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translated_service_value: {
        value: cdktf.stringToHclTerraform(this._translatedServiceValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translated_source_kind: {
        value: cdktf.stringToHclTerraform(this._translatedSourceKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translated_source_pat_pool_kind: {
        value: cdktf.stringToHclTerraform(this._translatedSourcePatPoolKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translated_source_pat_pool_value: {
        value: cdktf.stringToHclTerraform(this._translatedSourcePatPoolValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translated_source_value: {
        value: cdktf.stringToHclTerraform(this._translatedSourceValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unidirectional: {
        value: cdktf.booleanToHclTerraform(this._unidirectional),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_destination_interface_ipv6: {
        value: cdktf.booleanToHclTerraform(this._useDestinationInterfaceIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_source_interface_ipv6: {
        value: cdktf.booleanToHclTerraform(this._useSourceInterfaceIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
