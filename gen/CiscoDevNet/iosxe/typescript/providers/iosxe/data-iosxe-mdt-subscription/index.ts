// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/mdt_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeMdtSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/mdt_subscription#device DataIosxeMdtSubscription#device}
  */
  readonly device?: string;
  /**
  * Unique subscription identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/mdt_subscription#subscription_id DataIosxeMdtSubscription#subscription_id}
  */
  readonly subscriptionId: number;
}
export interface DataIosxeMdtSubscriptionReceivers {
}

export function dataIosxeMdtSubscriptionReceiversToTerraform(struct?: DataIosxeMdtSubscriptionReceivers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeMdtSubscriptionReceiversToHclTerraform(struct?: DataIosxeMdtSubscriptionReceivers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeMdtSubscriptionReceiversOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIosxeMdtSubscriptionReceivers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeMdtSubscriptionReceivers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataIosxeMdtSubscriptionReceiversList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeMdtSubscriptionReceiversOutputReference {
    return new DataIosxeMdtSubscriptionReceiversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/mdt_subscription iosxe_mdt_subscription}
*/
export class DataIosxeMdtSubscription extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_mdt_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeMdtSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeMdtSubscription to import
  * @param importFromId The id of the existing DataIosxeMdtSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/mdt_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeMdtSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_mdt_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/mdt_subscription iosxe_mdt_subscription} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeMdtSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeMdtSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_mdt_subscription',
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
    this._subscriptionId = config.subscriptionId;
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

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // filter_xpath - computed: true, optional: false, required: false
  public get filterXpath() {
    return this.getStringAttribute('filter_xpath');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // receivers - computed: true, optional: false, required: false
  private _receivers = new DataIosxeMdtSubscriptionReceiversList(this, "receivers", false);
  public get receivers() {
    return this._receivers;
  }

  // source_address - computed: true, optional: false, required: false
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }

  // source_vrf - computed: true, optional: false, required: false
  public get sourceVrf() {
    return this.getStringAttribute('source_vrf');
  }

  // stream - computed: true, optional: false, required: false
  public get stream() {
    return this.getStringAttribute('stream');
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

  // update_policy_on_change - computed: true, optional: false, required: false
  public get updatePolicyOnChange() {
    return this.getBooleanAttribute('update_policy_on_change');
  }

  // update_policy_periodic - computed: true, optional: false, required: false
  public get updatePolicyPeriodic() {
    return this.getNumberAttribute('update_policy_periodic');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      subscription_id: cdktf.numberToTerraform(this._subscriptionId),
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
      subscription_id: {
        value: cdktf.numberToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
