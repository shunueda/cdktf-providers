// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/hub_subscriptions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HubSubscriptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/hub_subscriptions#id HubSubscriptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * token_subscriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/hub_subscriptions#token_subscriptions HubSubscriptions#token_subscriptions}
  */
  readonly tokenSubscriptions?: HubSubscriptionsTokenSubscriptions;
}
export interface HubSubscriptionsTokenSubscriptionsTokenSubscription {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/hub_subscriptions#description HubSubscriptions#description}
  */
  readonly description?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/hub_subscriptions#enabled HubSubscriptions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Name of subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/hub_subscriptions#name HubSubscriptions#name}
  */
  readonly name: string;
  /**
  * Subscription token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/hub_subscriptions#token HubSubscriptions#token}
  */
  readonly token: string;
}

export function hubSubscriptionsTokenSubscriptionsTokenSubscriptionToTerraform(struct?: HubSubscriptionsTokenSubscriptionsTokenSubscription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function hubSubscriptionsTokenSubscriptionsTokenSubscriptionToHclTerraform(struct?: HubSubscriptionsTokenSubscriptionsTokenSubscription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HubSubscriptionsTokenSubscriptionsTokenSubscriptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HubSubscriptionsTokenSubscriptionsTokenSubscription | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HubSubscriptionsTokenSubscriptionsTokenSubscription | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enabled = value.enabled;
      this._name = value.name;
      this._token = value.token;
    }
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}

export class HubSubscriptionsTokenSubscriptionsTokenSubscriptionList extends cdktf.ComplexList {
  public internalValue? : HubSubscriptionsTokenSubscriptionsTokenSubscription[] | cdktf.IResolvable

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
  public get(index: number): HubSubscriptionsTokenSubscriptionsTokenSubscriptionOutputReference {
    return new HubSubscriptionsTokenSubscriptionsTokenSubscriptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HubSubscriptionsTokenSubscriptions {
  /**
  * token_subscription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/hub_subscriptions#token_subscription HubSubscriptions#token_subscription}
  */
  readonly tokenSubscription: HubSubscriptionsTokenSubscriptionsTokenSubscription[] | cdktf.IResolvable;
}

export function hubSubscriptionsTokenSubscriptionsToTerraform(struct?: HubSubscriptionsTokenSubscriptionsOutputReference | HubSubscriptionsTokenSubscriptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_subscription: cdktf.listMapper(hubSubscriptionsTokenSubscriptionsTokenSubscriptionToTerraform, true)(struct!.tokenSubscription),
  }
}


export function hubSubscriptionsTokenSubscriptionsToHclTerraform(struct?: HubSubscriptionsTokenSubscriptionsOutputReference | HubSubscriptionsTokenSubscriptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_subscription: {
      value: cdktf.listMapperHcl(hubSubscriptionsTokenSubscriptionsTokenSubscriptionToHclTerraform, true)(struct!.tokenSubscription),
      isBlock: true,
      type: "list",
      storageClassType: "HubSubscriptionsTokenSubscriptionsTokenSubscriptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HubSubscriptionsTokenSubscriptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HubSubscriptionsTokenSubscriptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenSubscription?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSubscription = this._tokenSubscription?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HubSubscriptionsTokenSubscriptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenSubscription.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenSubscription.internalValue = value.tokenSubscription;
    }
  }

  // token_subscription - computed: false, optional: false, required: true
  private _tokenSubscription = new HubSubscriptionsTokenSubscriptionsTokenSubscriptionList(this, "token_subscription", false);
  public get tokenSubscription() {
    return this._tokenSubscription;
  }
  public putTokenSubscription(value: HubSubscriptionsTokenSubscriptionsTokenSubscription[] | cdktf.IResolvable) {
    this._tokenSubscription.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSubscriptionInput() {
    return this._tokenSubscription.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/hub_subscriptions dynatrace_hub_subscriptions}
*/
export class HubSubscriptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_hub_subscriptions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HubSubscriptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HubSubscriptions to import
  * @param importFromId The id of the existing HubSubscriptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/hub_subscriptions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HubSubscriptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_hub_subscriptions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/hub_subscriptions dynatrace_hub_subscriptions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HubSubscriptionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HubSubscriptionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_hub_subscriptions',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
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
    this._tokenSubscriptions.internalValue = config.tokenSubscriptions;
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

  // token_subscriptions - computed: false, optional: true, required: false
  private _tokenSubscriptions = new HubSubscriptionsTokenSubscriptionsOutputReference(this, "token_subscriptions");
  public get tokenSubscriptions() {
    return this._tokenSubscriptions;
  }
  public putTokenSubscriptions(value: HubSubscriptionsTokenSubscriptions) {
    this._tokenSubscriptions.internalValue = value;
  }
  public resetTokenSubscriptions() {
    this._tokenSubscriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSubscriptionsInput() {
    return this._tokenSubscriptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      token_subscriptions: hubSubscriptionsTokenSubscriptionsToTerraform(this._tokenSubscriptions.internalValue),
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
      token_subscriptions: {
        value: hubSubscriptionsTokenSubscriptionsToHclTerraform(this._tokenSubscriptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HubSubscriptionsTokenSubscriptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
