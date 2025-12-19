// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDnsCacheConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable operational refreshing zone transfer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config#disable_zone_transfer_in_oper_mode DdosDnsCacheConfigA#disable_zone_transfer_in_oper_mode}
  */
  readonly disableZoneTransferInOperMode?: number;
  /**
  * Disable warm up zone transfer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config#disable_zone_transfer_in_warm_up_mode DdosDnsCacheConfigA#disable_zone_transfer_in_warm_up_mode}
  */
  readonly disableZoneTransferInWarmUpMode?: number;
  /**
  * Set the global maximum EDNS UDP message size (Default: 1232)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config#edns_udp_size DdosDnsCacheConfigA#edns_udp_size}
  */
  readonly ednsUdpSize?: number;
  /**
  * Enable route injection during cold boot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config#enable_cache_warm_up_bgp_advertise DdosDnsCacheConfigA#enable_cache_warm_up_bgp_advertise}
  */
  readonly enableCacheWarmUpBgpAdvertise?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config#id DdosDnsCacheConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable sending an empty DNS message when the response is truncated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config#minimal_truncation_responses DdosDnsCacheConfigA#minimal_truncation_responses}
  */
  readonly minimalTruncationResponses?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config#uuid DdosDnsCacheConfigA#uuid}
  */
  readonly uuid?: string;
  /**
  * max_concurrent_zone_transfers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config#max_concurrent_zone_transfers DdosDnsCacheConfigA#max_concurrent_zone_transfers}
  */
  readonly maxConcurrentZoneTransfers?: DdosDnsCacheConfigMaxConcurrentZoneTransfers;
}
export interface DdosDnsCacheConfigMaxConcurrentZoneTransfers {
  /**
  * Number of concurrent zone transfers after boot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config#operational_mode DdosDnsCacheConfigA#operational_mode}
  */
  readonly operationalMode?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config#uuid DdosDnsCacheConfigA#uuid}
  */
  readonly uuid?: string;
  /**
  * Number of concurrent zone transfers during cold boot (default 65472)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config#warm_up_mode DdosDnsCacheConfigA#warm_up_mode}
  */
  readonly warmUpMode?: number;
}

export function ddosDnsCacheConfigMaxConcurrentZoneTransfersToTerraform(struct?: DdosDnsCacheConfigMaxConcurrentZoneTransfersOutputReference | DdosDnsCacheConfigMaxConcurrentZoneTransfers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operational_mode: cdktf.numberToTerraform(struct!.operationalMode),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    warm_up_mode: cdktf.numberToTerraform(struct!.warmUpMode),
  }
}


export function ddosDnsCacheConfigMaxConcurrentZoneTransfersToHclTerraform(struct?: DdosDnsCacheConfigMaxConcurrentZoneTransfersOutputReference | DdosDnsCacheConfigMaxConcurrentZoneTransfers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operational_mode: {
      value: cdktf.numberToHclTerraform(struct!.operationalMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warm_up_mode: {
      value: cdktf.numberToHclTerraform(struct!.warmUpMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDnsCacheConfigMaxConcurrentZoneTransfersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDnsCacheConfigMaxConcurrentZoneTransfers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operationalMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationalMode = this._operationalMode;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._warmUpMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmUpMode = this._warmUpMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDnsCacheConfigMaxConcurrentZoneTransfers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operationalMode = undefined;
      this._uuid = undefined;
      this._warmUpMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operationalMode = value.operationalMode;
      this._uuid = value.uuid;
      this._warmUpMode = value.warmUpMode;
    }
  }

  // operational_mode - computed: false, optional: true, required: false
  private _operationalMode?: number; 
  public get operationalMode() {
    return this.getNumberAttribute('operational_mode');
  }
  public set operationalMode(value: number) {
    this._operationalMode = value;
  }
  public resetOperationalMode() {
    this._operationalMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationalModeInput() {
    return this._operationalMode;
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

  // warm_up_mode - computed: false, optional: true, required: false
  private _warmUpMode?: number; 
  public get warmUpMode() {
    return this.getNumberAttribute('warm_up_mode');
  }
  public set warmUpMode(value: number) {
    this._warmUpMode = value;
  }
  public resetWarmUpMode() {
    this._warmUpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmUpModeInput() {
    return this._warmUpMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config thunder_ddos_dns_cache_config}
*/
export class DdosDnsCacheConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dns_cache_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDnsCacheConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDnsCacheConfigA to import
  * @param importFromId The id of the existing DdosDnsCacheConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDnsCacheConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dns_cache_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config thunder_ddos_dns_cache_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDnsCacheConfigAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DdosDnsCacheConfigAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dns_cache_config',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disableZoneTransferInOperMode = config.disableZoneTransferInOperMode;
    this._disableZoneTransferInWarmUpMode = config.disableZoneTransferInWarmUpMode;
    this._ednsUdpSize = config.ednsUdpSize;
    this._enableCacheWarmUpBgpAdvertise = config.enableCacheWarmUpBgpAdvertise;
    this._id = config.id;
    this._minimalTruncationResponses = config.minimalTruncationResponses;
    this._uuid = config.uuid;
    this._maxConcurrentZoneTransfers.internalValue = config.maxConcurrentZoneTransfers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_zone_transfer_in_oper_mode - computed: false, optional: true, required: false
  private _disableZoneTransferInOperMode?: number; 
  public get disableZoneTransferInOperMode() {
    return this.getNumberAttribute('disable_zone_transfer_in_oper_mode');
  }
  public set disableZoneTransferInOperMode(value: number) {
    this._disableZoneTransferInOperMode = value;
  }
  public resetDisableZoneTransferInOperMode() {
    this._disableZoneTransferInOperMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableZoneTransferInOperModeInput() {
    return this._disableZoneTransferInOperMode;
  }

  // disable_zone_transfer_in_warm_up_mode - computed: false, optional: true, required: false
  private _disableZoneTransferInWarmUpMode?: number; 
  public get disableZoneTransferInWarmUpMode() {
    return this.getNumberAttribute('disable_zone_transfer_in_warm_up_mode');
  }
  public set disableZoneTransferInWarmUpMode(value: number) {
    this._disableZoneTransferInWarmUpMode = value;
  }
  public resetDisableZoneTransferInWarmUpMode() {
    this._disableZoneTransferInWarmUpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableZoneTransferInWarmUpModeInput() {
    return this._disableZoneTransferInWarmUpMode;
  }

  // edns_udp_size - computed: false, optional: true, required: false
  private _ednsUdpSize?: number; 
  public get ednsUdpSize() {
    return this.getNumberAttribute('edns_udp_size');
  }
  public set ednsUdpSize(value: number) {
    this._ednsUdpSize = value;
  }
  public resetEdnsUdpSize() {
    this._ednsUdpSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ednsUdpSizeInput() {
    return this._ednsUdpSize;
  }

  // enable_cache_warm_up_bgp_advertise - computed: false, optional: true, required: false
  private _enableCacheWarmUpBgpAdvertise?: number; 
  public get enableCacheWarmUpBgpAdvertise() {
    return this.getNumberAttribute('enable_cache_warm_up_bgp_advertise');
  }
  public set enableCacheWarmUpBgpAdvertise(value: number) {
    this._enableCacheWarmUpBgpAdvertise = value;
  }
  public resetEnableCacheWarmUpBgpAdvertise() {
    this._enableCacheWarmUpBgpAdvertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCacheWarmUpBgpAdvertiseInput() {
    return this._enableCacheWarmUpBgpAdvertise;
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

  // minimal_truncation_responses - computed: false, optional: true, required: false
  private _minimalTruncationResponses?: number; 
  public get minimalTruncationResponses() {
    return this.getNumberAttribute('minimal_truncation_responses');
  }
  public set minimalTruncationResponses(value: number) {
    this._minimalTruncationResponses = value;
  }
  public resetMinimalTruncationResponses() {
    this._minimalTruncationResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalTruncationResponsesInput() {
    return this._minimalTruncationResponses;
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

  // max_concurrent_zone_transfers - computed: false, optional: true, required: false
  private _maxConcurrentZoneTransfers = new DdosDnsCacheConfigMaxConcurrentZoneTransfersOutputReference(this, "max_concurrent_zone_transfers");
  public get maxConcurrentZoneTransfers() {
    return this._maxConcurrentZoneTransfers;
  }
  public putMaxConcurrentZoneTransfers(value: DdosDnsCacheConfigMaxConcurrentZoneTransfers) {
    this._maxConcurrentZoneTransfers.internalValue = value;
  }
  public resetMaxConcurrentZoneTransfers() {
    this._maxConcurrentZoneTransfers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentZoneTransfersInput() {
    return this._maxConcurrentZoneTransfers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_zone_transfer_in_oper_mode: cdktf.numberToTerraform(this._disableZoneTransferInOperMode),
      disable_zone_transfer_in_warm_up_mode: cdktf.numberToTerraform(this._disableZoneTransferInWarmUpMode),
      edns_udp_size: cdktf.numberToTerraform(this._ednsUdpSize),
      enable_cache_warm_up_bgp_advertise: cdktf.numberToTerraform(this._enableCacheWarmUpBgpAdvertise),
      id: cdktf.stringToTerraform(this._id),
      minimal_truncation_responses: cdktf.numberToTerraform(this._minimalTruncationResponses),
      uuid: cdktf.stringToTerraform(this._uuid),
      max_concurrent_zone_transfers: ddosDnsCacheConfigMaxConcurrentZoneTransfersToTerraform(this._maxConcurrentZoneTransfers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_zone_transfer_in_oper_mode: {
        value: cdktf.numberToHclTerraform(this._disableZoneTransferInOperMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_zone_transfer_in_warm_up_mode: {
        value: cdktf.numberToHclTerraform(this._disableZoneTransferInWarmUpMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      edns_udp_size: {
        value: cdktf.numberToHclTerraform(this._ednsUdpSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_cache_warm_up_bgp_advertise: {
        value: cdktf.numberToHclTerraform(this._enableCacheWarmUpBgpAdvertise),
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
      minimal_truncation_responses: {
        value: cdktf.numberToHclTerraform(this._minimalTruncationResponses),
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
      max_concurrent_zone_transfers: {
        value: ddosDnsCacheConfigMaxConcurrentZoneTransfersToHclTerraform(this._maxConcurrentZoneTransfers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDnsCacheConfigMaxConcurrentZoneTransfersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
