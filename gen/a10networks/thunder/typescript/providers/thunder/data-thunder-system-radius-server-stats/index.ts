// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemRadiusServerStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats#id DataThunderSystemRadiusServerStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats#stats DataThunderSystemRadiusServerStats#stats}
  */
  readonly stats?: DataThunderSystemRadiusServerStatsStats;
}
export interface DataThunderSystemRadiusServerStatsStats {
  /**
  * Custom attribute Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats#custom_received DataThunderSystemRadiusServerStats#custom_received}
  */
  readonly customReceived?: number;
  /**
  * HA Standby Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats#ha_standby_dropped DataThunderSystemRadiusServerStats#ha_standby_dropped}
  */
  readonly haStandbyDropped?: number;
  /**
  * IMEI Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats#imei_received DataThunderSystemRadiusServerStats#imei_received}
  */
  readonly imeiReceived?: number;
  /**
  * IMSI Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats#imsi_received DataThunderSystemRadiusServerStats#imsi_received}
  */
  readonly imsiReceived?: number;
  /**
  * Radius Request has Invalid Key Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats#invalid_key DataThunderSystemRadiusServerStats#invalid_key}
  */
  readonly invalidKey?: number;
  /**
  * Framed IPV6 Prefix Length Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats#ipv6_prefix_length_mismatch DataThunderSystemRadiusServerStats#ipv6_prefix_length_mismatch}
  */
  readonly ipv6PrefixLengthMismatch?: number;
  /**
  * MSISDN Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats#msisdn_received DataThunderSystemRadiusServerStats#msisdn_received}
  */
  readonly msisdnReceived?: number;
  /**
  * RADIUS Request Dropped (Malformed Packet)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats#radius_request_dropped DataThunderSystemRadiusServerStats#radius_request_dropped}
  */
  readonly radiusRequestDropped?: number;
  /**
  * RADIUS Request Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats#radius_request_received DataThunderSystemRadiusServerStats#radius_request_received}
  */
  readonly radiusRequestReceived?: number;
  /**
  * RADIUS Request Dropped (Table Full)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats#radius_table_full DataThunderSystemRadiusServerStats#radius_table_full}
  */
  readonly radiusTableFull?: number;
  /**
  * RADIUS Request Bad Secret Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats#request_bad_secret_dropped DataThunderSystemRadiusServerStats#request_bad_secret_dropped}
  */
  readonly requestBadSecretDropped?: number;
  /**
  * RADIUS Request Ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats#request_ignored DataThunderSystemRadiusServerStats#request_ignored}
  */
  readonly requestIgnored?: number;
  /**
  * RADIUS Request Malformed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats#request_malformed_dropped DataThunderSystemRadiusServerStats#request_malformed_dropped}
  */
  readonly requestMalformedDropped?: number;
  /**
  * RADIUS Request No Key Attribute Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats#request_no_key_vap_dropped DataThunderSystemRadiusServerStats#request_no_key_vap_dropped}
  */
  readonly requestNoKeyVapDropped?: number;
  /**
  * RADIUS Secret Not Configured Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats#secret_not_configured_dropped DataThunderSystemRadiusServerStats#secret_not_configured_dropped}
  */
  readonly secretNotConfiguredDropped?: number;
}

export function dataThunderSystemRadiusServerStatsStatsToTerraform(struct?: DataThunderSystemRadiusServerStatsStatsOutputReference | DataThunderSystemRadiusServerStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_received: cdktf.numberToTerraform(struct!.customReceived),
    ha_standby_dropped: cdktf.numberToTerraform(struct!.haStandbyDropped),
    imei_received: cdktf.numberToTerraform(struct!.imeiReceived),
    imsi_received: cdktf.numberToTerraform(struct!.imsiReceived),
    invalid_key: cdktf.numberToTerraform(struct!.invalidKey),
    ipv6_prefix_length_mismatch: cdktf.numberToTerraform(struct!.ipv6PrefixLengthMismatch),
    msisdn_received: cdktf.numberToTerraform(struct!.msisdnReceived),
    radius_request_dropped: cdktf.numberToTerraform(struct!.radiusRequestDropped),
    radius_request_received: cdktf.numberToTerraform(struct!.radiusRequestReceived),
    radius_table_full: cdktf.numberToTerraform(struct!.radiusTableFull),
    request_bad_secret_dropped: cdktf.numberToTerraform(struct!.requestBadSecretDropped),
    request_ignored: cdktf.numberToTerraform(struct!.requestIgnored),
    request_malformed_dropped: cdktf.numberToTerraform(struct!.requestMalformedDropped),
    request_no_key_vap_dropped: cdktf.numberToTerraform(struct!.requestNoKeyVapDropped),
    secret_not_configured_dropped: cdktf.numberToTerraform(struct!.secretNotConfiguredDropped),
  }
}


export function dataThunderSystemRadiusServerStatsStatsToHclTerraform(struct?: DataThunderSystemRadiusServerStatsStatsOutputReference | DataThunderSystemRadiusServerStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_received: {
      value: cdktf.numberToHclTerraform(struct!.customReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_standby_dropped: {
      value: cdktf.numberToHclTerraform(struct!.haStandbyDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    imei_received: {
      value: cdktf.numberToHclTerraform(struct!.imeiReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    imsi_received: {
      value: cdktf.numberToHclTerraform(struct!.imsiReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_key: {
      value: cdktf.numberToHclTerraform(struct!.invalidKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_prefix_length_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.ipv6PrefixLengthMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msisdn_received: {
      value: cdktf.numberToHclTerraform(struct!.msisdnReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_request_dropped: {
      value: cdktf.numberToHclTerraform(struct!.radiusRequestDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_request_received: {
      value: cdktf.numberToHclTerraform(struct!.radiusRequestReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_table_full: {
      value: cdktf.numberToHclTerraform(struct!.radiusTableFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_bad_secret_dropped: {
      value: cdktf.numberToHclTerraform(struct!.requestBadSecretDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_ignored: {
      value: cdktf.numberToHclTerraform(struct!.requestIgnored),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_malformed_dropped: {
      value: cdktf.numberToHclTerraform(struct!.requestMalformedDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_no_key_vap_dropped: {
      value: cdktf.numberToHclTerraform(struct!.requestNoKeyVapDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_not_configured_dropped: {
      value: cdktf.numberToHclTerraform(struct!.secretNotConfiguredDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemRadiusServerStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemRadiusServerStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.customReceived = this._customReceived;
    }
    if (this._haStandbyDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.haStandbyDropped = this._haStandbyDropped;
    }
    if (this._imeiReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.imeiReceived = this._imeiReceived;
    }
    if (this._imsiReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.imsiReceived = this._imsiReceived;
    }
    if (this._invalidKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidKey = this._invalidKey;
    }
    if (this._ipv6PrefixLengthMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PrefixLengthMismatch = this._ipv6PrefixLengthMismatch;
    }
    if (this._msisdnReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.msisdnReceived = this._msisdnReceived;
    }
    if (this._radiusRequestDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusRequestDropped = this._radiusRequestDropped;
    }
    if (this._radiusRequestReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusRequestReceived = this._radiusRequestReceived;
    }
    if (this._radiusTableFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusTableFull = this._radiusTableFull;
    }
    if (this._requestBadSecretDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBadSecretDropped = this._requestBadSecretDropped;
    }
    if (this._requestIgnored !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestIgnored = this._requestIgnored;
    }
    if (this._requestMalformedDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMalformedDropped = this._requestMalformedDropped;
    }
    if (this._requestNoKeyVapDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestNoKeyVapDropped = this._requestNoKeyVapDropped;
    }
    if (this._secretNotConfiguredDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretNotConfiguredDropped = this._secretNotConfiguredDropped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemRadiusServerStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customReceived = undefined;
      this._haStandbyDropped = undefined;
      this._imeiReceived = undefined;
      this._imsiReceived = undefined;
      this._invalidKey = undefined;
      this._ipv6PrefixLengthMismatch = undefined;
      this._msisdnReceived = undefined;
      this._radiusRequestDropped = undefined;
      this._radiusRequestReceived = undefined;
      this._radiusTableFull = undefined;
      this._requestBadSecretDropped = undefined;
      this._requestIgnored = undefined;
      this._requestMalformedDropped = undefined;
      this._requestNoKeyVapDropped = undefined;
      this._secretNotConfiguredDropped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customReceived = value.customReceived;
      this._haStandbyDropped = value.haStandbyDropped;
      this._imeiReceived = value.imeiReceived;
      this._imsiReceived = value.imsiReceived;
      this._invalidKey = value.invalidKey;
      this._ipv6PrefixLengthMismatch = value.ipv6PrefixLengthMismatch;
      this._msisdnReceived = value.msisdnReceived;
      this._radiusRequestDropped = value.radiusRequestDropped;
      this._radiusRequestReceived = value.radiusRequestReceived;
      this._radiusTableFull = value.radiusTableFull;
      this._requestBadSecretDropped = value.requestBadSecretDropped;
      this._requestIgnored = value.requestIgnored;
      this._requestMalformedDropped = value.requestMalformedDropped;
      this._requestNoKeyVapDropped = value.requestNoKeyVapDropped;
      this._secretNotConfiguredDropped = value.secretNotConfiguredDropped;
    }
  }

  // custom_received - computed: false, optional: true, required: false
  private _customReceived?: number; 
  public get customReceived() {
    return this.getNumberAttribute('custom_received');
  }
  public set customReceived(value: number) {
    this._customReceived = value;
  }
  public resetCustomReceived() {
    this._customReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customReceivedInput() {
    return this._customReceived;
  }

  // ha_standby_dropped - computed: false, optional: true, required: false
  private _haStandbyDropped?: number; 
  public get haStandbyDropped() {
    return this.getNumberAttribute('ha_standby_dropped');
  }
  public set haStandbyDropped(value: number) {
    this._haStandbyDropped = value;
  }
  public resetHaStandbyDropped() {
    this._haStandbyDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haStandbyDroppedInput() {
    return this._haStandbyDropped;
  }

  // imei_received - computed: false, optional: true, required: false
  private _imeiReceived?: number; 
  public get imeiReceived() {
    return this.getNumberAttribute('imei_received');
  }
  public set imeiReceived(value: number) {
    this._imeiReceived = value;
  }
  public resetImeiReceived() {
    this._imeiReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imeiReceivedInput() {
    return this._imeiReceived;
  }

  // imsi_received - computed: false, optional: true, required: false
  private _imsiReceived?: number; 
  public get imsiReceived() {
    return this.getNumberAttribute('imsi_received');
  }
  public set imsiReceived(value: number) {
    this._imsiReceived = value;
  }
  public resetImsiReceived() {
    this._imsiReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsiReceivedInput() {
    return this._imsiReceived;
  }

  // invalid_key - computed: false, optional: true, required: false
  private _invalidKey?: number; 
  public get invalidKey() {
    return this.getNumberAttribute('invalid_key');
  }
  public set invalidKey(value: number) {
    this._invalidKey = value;
  }
  public resetInvalidKey() {
    this._invalidKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidKeyInput() {
    return this._invalidKey;
  }

  // ipv6_prefix_length_mismatch - computed: false, optional: true, required: false
  private _ipv6PrefixLengthMismatch?: number; 
  public get ipv6PrefixLengthMismatch() {
    return this.getNumberAttribute('ipv6_prefix_length_mismatch');
  }
  public set ipv6PrefixLengthMismatch(value: number) {
    this._ipv6PrefixLengthMismatch = value;
  }
  public resetIpv6PrefixLengthMismatch() {
    this._ipv6PrefixLengthMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixLengthMismatchInput() {
    return this._ipv6PrefixLengthMismatch;
  }

  // msisdn_received - computed: false, optional: true, required: false
  private _msisdnReceived?: number; 
  public get msisdnReceived() {
    return this.getNumberAttribute('msisdn_received');
  }
  public set msisdnReceived(value: number) {
    this._msisdnReceived = value;
  }
  public resetMsisdnReceived() {
    this._msisdnReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msisdnReceivedInput() {
    return this._msisdnReceived;
  }

  // radius_request_dropped - computed: false, optional: true, required: false
  private _radiusRequestDropped?: number; 
  public get radiusRequestDropped() {
    return this.getNumberAttribute('radius_request_dropped');
  }
  public set radiusRequestDropped(value: number) {
    this._radiusRequestDropped = value;
  }
  public resetRadiusRequestDropped() {
    this._radiusRequestDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusRequestDroppedInput() {
    return this._radiusRequestDropped;
  }

  // radius_request_received - computed: false, optional: true, required: false
  private _radiusRequestReceived?: number; 
  public get radiusRequestReceived() {
    return this.getNumberAttribute('radius_request_received');
  }
  public set radiusRequestReceived(value: number) {
    this._radiusRequestReceived = value;
  }
  public resetRadiusRequestReceived() {
    this._radiusRequestReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusRequestReceivedInput() {
    return this._radiusRequestReceived;
  }

  // radius_table_full - computed: false, optional: true, required: false
  private _radiusTableFull?: number; 
  public get radiusTableFull() {
    return this.getNumberAttribute('radius_table_full');
  }
  public set radiusTableFull(value: number) {
    this._radiusTableFull = value;
  }
  public resetRadiusTableFull() {
    this._radiusTableFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTableFullInput() {
    return this._radiusTableFull;
  }

  // request_bad_secret_dropped - computed: false, optional: true, required: false
  private _requestBadSecretDropped?: number; 
  public get requestBadSecretDropped() {
    return this.getNumberAttribute('request_bad_secret_dropped');
  }
  public set requestBadSecretDropped(value: number) {
    this._requestBadSecretDropped = value;
  }
  public resetRequestBadSecretDropped() {
    this._requestBadSecretDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBadSecretDroppedInput() {
    return this._requestBadSecretDropped;
  }

  // request_ignored - computed: false, optional: true, required: false
  private _requestIgnored?: number; 
  public get requestIgnored() {
    return this.getNumberAttribute('request_ignored');
  }
  public set requestIgnored(value: number) {
    this._requestIgnored = value;
  }
  public resetRequestIgnored() {
    this._requestIgnored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIgnoredInput() {
    return this._requestIgnored;
  }

  // request_malformed_dropped - computed: false, optional: true, required: false
  private _requestMalformedDropped?: number; 
  public get requestMalformedDropped() {
    return this.getNumberAttribute('request_malformed_dropped');
  }
  public set requestMalformedDropped(value: number) {
    this._requestMalformedDropped = value;
  }
  public resetRequestMalformedDropped() {
    this._requestMalformedDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMalformedDroppedInput() {
    return this._requestMalformedDropped;
  }

  // request_no_key_vap_dropped - computed: false, optional: true, required: false
  private _requestNoKeyVapDropped?: number; 
  public get requestNoKeyVapDropped() {
    return this.getNumberAttribute('request_no_key_vap_dropped');
  }
  public set requestNoKeyVapDropped(value: number) {
    this._requestNoKeyVapDropped = value;
  }
  public resetRequestNoKeyVapDropped() {
    this._requestNoKeyVapDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestNoKeyVapDroppedInput() {
    return this._requestNoKeyVapDropped;
  }

  // secret_not_configured_dropped - computed: false, optional: true, required: false
  private _secretNotConfiguredDropped?: number; 
  public get secretNotConfiguredDropped() {
    return this.getNumberAttribute('secret_not_configured_dropped');
  }
  public set secretNotConfiguredDropped(value: number) {
    this._secretNotConfiguredDropped = value;
  }
  public resetSecretNotConfiguredDropped() {
    this._secretNotConfiguredDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNotConfiguredDroppedInput() {
    return this._secretNotConfiguredDropped;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats thunder_system_radius_server_stats}
*/
export class DataThunderSystemRadiusServerStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_radius_server_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemRadiusServerStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemRadiusServerStats to import
  * @param importFromId The id of the existing DataThunderSystemRadiusServerStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemRadiusServerStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_radius_server_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_radius_server_stats thunder_system_radius_server_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemRadiusServerStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemRadiusServerStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_radius_server_stats',
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
    this._id = config.id;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSystemRadiusServerStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemRadiusServerStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderSystemRadiusServerStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderSystemRadiusServerStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemRadiusServerStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
