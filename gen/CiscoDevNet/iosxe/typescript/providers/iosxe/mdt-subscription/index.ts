// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/mdt_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdtSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/mdt_subscription#device MdtSubscription#device}
  */
  readonly device?: string;
  /**
  * Update notification encoding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/mdt_subscription#encoding MdtSubscription#encoding}
  */
  readonly encoding?: string;
  /**
  * XPath expression describing the set of objects wanted as part of the subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/mdt_subscription#filter_xpath MdtSubscription#filter_xpath}
  */
  readonly filterXpath?: string;
  /**
  * Configuration of receivers of configured subscriptions. Use of this is deprecated. Use mdt-receiver-names instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/mdt_subscription#receivers MdtSubscription#receivers}
  */
  readonly receivers?: MdtSubscriptionReceivers[] | cdktf.IResolvable;
  /**
  * The source address for the notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/mdt_subscription#source_address MdtSubscription#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Network instance name for the VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/mdt_subscription#source_vrf MdtSubscription#source_vrf}
  */
  readonly sourceVrf?: string;
  /**
  * The name of the event stream being subscribed to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/mdt_subscription#stream MdtSubscription#stream}
  */
  readonly stream?: string;
  /**
  * Unique subscription identifier.
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/mdt_subscription#subscription_id MdtSubscription#subscription_id}
  */
  readonly subscriptionId: number;
  /**
  * If true, there is no initial update notification with the current value of all the data. NOT CURRENTLY SUPPORTED. If specified, must be false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/mdt_subscription#update_policy_on_change MdtSubscription#update_policy_on_change}
  */
  readonly updatePolicyOnChange?: boolean | cdktf.IResolvable;
  /**
  * Period of update notifications in hundredths of a second
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/mdt_subscription#update_policy_periodic MdtSubscription#update_policy_periodic}
  */
  readonly updatePolicyPeriodic?: number;
}
export interface MdtSubscriptionReceivers {
  /**
  * IP address of the receiver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/mdt_subscription#address MdtSubscription#address}
  */
  readonly address: string;
  /**
  * Network port of the receiver
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/mdt_subscription#port MdtSubscription#port}
  */
  readonly port: number;
  /**
  * Receiver transport protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/mdt_subscription#protocol MdtSubscription#protocol}
  */
  readonly protocol: string;
}

export function mdtSubscriptionReceiversToTerraform(struct?: MdtSubscriptionReceivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function mdtSubscriptionReceiversToHclTerraform(struct?: MdtSubscriptionReceivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdtSubscriptionReceiversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdtSubscriptionReceivers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdtSubscriptionReceivers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class MdtSubscriptionReceiversList extends cdktf.ComplexList {
  public internalValue? : MdtSubscriptionReceivers[] | cdktf.IResolvable

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
  public get(index: number): MdtSubscriptionReceiversOutputReference {
    return new MdtSubscriptionReceiversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/mdt_subscription iosxe_mdt_subscription}
*/
export class MdtSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_mdt_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdtSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdtSubscription to import
  * @param importFromId The id of the existing MdtSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/mdt_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdtSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_mdt_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/mdt_subscription iosxe_mdt_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdtSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: MdtSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_mdt_subscription',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.5',
        providerVersionConstraint: '0.14.5'
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
    this._encoding = config.encoding;
    this._filterXpath = config.filterXpath;
    this._receivers.internalValue = config.receivers;
    this._sourceAddress = config.sourceAddress;
    this._sourceVrf = config.sourceVrf;
    this._stream = config.stream;
    this._subscriptionId = config.subscriptionId;
    this._updatePolicyOnChange = config.updatePolicyOnChange;
    this._updatePolicyPeriodic = config.updatePolicyPeriodic;
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

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // filter_xpath - computed: false, optional: true, required: false
  private _filterXpath?: string; 
  public get filterXpath() {
    return this.getStringAttribute('filter_xpath');
  }
  public set filterXpath(value: string) {
    this._filterXpath = value;
  }
  public resetFilterXpath() {
    this._filterXpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterXpathInput() {
    return this._filterXpath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // receivers - computed: false, optional: true, required: false
  private _receivers = new MdtSubscriptionReceiversList(this, "receivers", false);
  public get receivers() {
    return this._receivers;
  }
  public putReceivers(value: MdtSubscriptionReceivers[] | cdktf.IResolvable) {
    this._receivers.internalValue = value;
  }
  public resetReceivers() {
    this._receivers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiversInput() {
    return this._receivers.internalValue;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // source_vrf - computed: false, optional: true, required: false
  private _sourceVrf?: string; 
  public get sourceVrf() {
    return this.getStringAttribute('source_vrf');
  }
  public set sourceVrf(value: string) {
    this._sourceVrf = value;
  }
  public resetSourceVrf() {
    this._sourceVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVrfInput() {
    return this._sourceVrf;
  }

  // stream - computed: false, optional: true, required: false
  private _stream?: string; 
  public get stream() {
    return this.getStringAttribute('stream');
  }
  public set stream(value: string) {
    this._stream = value;
  }
  public resetStream() {
    this._stream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamInput() {
    return this._stream;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: number; 
  public get subscriptionId() {
    return this.getNumberAttribute('subscription_id');
  }
  public set subscriptionId(value: number) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // update_policy_on_change - computed: false, optional: true, required: false
  private _updatePolicyOnChange?: boolean | cdktf.IResolvable; 
  public get updatePolicyOnChange() {
    return this.getBooleanAttribute('update_policy_on_change');
  }
  public set updatePolicyOnChange(value: boolean | cdktf.IResolvable) {
    this._updatePolicyOnChange = value;
  }
  public resetUpdatePolicyOnChange() {
    this._updatePolicyOnChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyOnChangeInput() {
    return this._updatePolicyOnChange;
  }

  // update_policy_periodic - computed: false, optional: true, required: false
  private _updatePolicyPeriodic?: number; 
  public get updatePolicyPeriodic() {
    return this.getNumberAttribute('update_policy_periodic');
  }
  public set updatePolicyPeriodic(value: number) {
    this._updatePolicyPeriodic = value;
  }
  public resetUpdatePolicyPeriodic() {
    this._updatePolicyPeriodic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyPeriodicInput() {
    return this._updatePolicyPeriodic;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      encoding: cdktf.stringToTerraform(this._encoding),
      filter_xpath: cdktf.stringToTerraform(this._filterXpath),
      receivers: cdktf.listMapper(mdtSubscriptionReceiversToTerraform, false)(this._receivers.internalValue),
      source_address: cdktf.stringToTerraform(this._sourceAddress),
      source_vrf: cdktf.stringToTerraform(this._sourceVrf),
      stream: cdktf.stringToTerraform(this._stream),
      subscription_id: cdktf.numberToTerraform(this._subscriptionId),
      update_policy_on_change: cdktf.booleanToTerraform(this._updatePolicyOnChange),
      update_policy_periodic: cdktf.numberToTerraform(this._updatePolicyPeriodic),
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
      encoding: {
        value: cdktf.stringToHclTerraform(this._encoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_xpath: {
        value: cdktf.stringToHclTerraform(this._filterXpath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      receivers: {
        value: cdktf.listMapperHcl(mdtSubscriptionReceiversToHclTerraform, false)(this._receivers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdtSubscriptionReceiversList",
      },
      source_address: {
        value: cdktf.stringToHclTerraform(this._sourceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_vrf: {
        value: cdktf.stringToHclTerraform(this._sourceVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream: {
        value: cdktf.stringToHclTerraform(this._stream),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.numberToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_policy_on_change: {
        value: cdktf.booleanToHclTerraform(this._updatePolicyOnChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      update_policy_periodic: {
        value: cdktf.numberToHclTerraform(this._updatePolicyPeriodic),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
