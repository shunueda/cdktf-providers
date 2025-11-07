// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisualTransitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag to deploy transit setup, if set to true the setup is deployed else would be in config state, defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#deploy_transit_setup VisualTransit#deploy_transit_setup}
  */
  readonly deployTransitSetup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#id VisualTransit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Wait for the rollout of the task to complete. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#wait_for_rollout VisualTransit#wait_for_rollout}
  */
  readonly waitForRollout?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#timeouts VisualTransit#timeouts}
  */
  readonly timeouts?: VisualTransitTimeouts;
  /**
  * transit_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#transit_input VisualTransit#transit_input}
  */
  readonly transitInput: VisualTransitTransitInput[] | cdktf.IResolvable;
}
export interface VisualTransitTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#create VisualTransit#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#delete VisualTransit#delete}
  */
  readonly delete?: string;
}

export function visualTransitTimeoutsToTerraform(struct?: VisualTransitTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function visualTransitTimeoutsToHclTerraform(struct?: VisualTransitTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisualTransitTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VisualTransitTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisualTransitTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}
export interface VisualTransitTransitInputTransitDeploymentTgwsConnection {
  /**
  * Connection Action, e.g: ADD, DEL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#action VisualTransit#action}
  */
  readonly action: string;
  /**
  * Name of VPC if connection type is VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#name VisualTransit#name}
  */
  readonly name?: string;
  /**
  * Type of connection, e.g: EDGE, VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#type VisualTransit#type}
  */
  readonly type: string;
}

export function visualTransitTransitInputTransitDeploymentTgwsConnectionToTerraform(struct?: VisualTransitTransitInputTransitDeploymentTgwsConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function visualTransitTransitInputTransitDeploymentTgwsConnectionToHclTerraform(struct?: VisualTransitTransitInputTransitDeploymentTgwsConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisualTransitTransitInputTransitDeploymentTgwsConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisualTransitTransitInputTransitDeploymentTgwsConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisualTransitTransitInputTransitDeploymentTgwsConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._type = value.type;
    }
  }

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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class VisualTransitTransitInputTransitDeploymentTgwsConnectionList extends cdktf.ComplexList {
  public internalValue? : VisualTransitTransitInputTransitDeploymentTgwsConnection[] | cdktf.IResolvable

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
  public get(index: number): VisualTransitTransitInputTransitDeploymentTgwsConnectionOutputReference {
    return new VisualTransitTransitInputTransitDeploymentTgwsConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisualTransitTransitInputTransitDeploymentTgws {
  /**
  * AWS account Details: Applicable while creating a new TGW  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#account VisualTransit#account}
  */
  readonly account?: string;
  /**
  * Action on TGW, e.g: ADD, MOD, DEL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#action VisualTransit#action}
  */
  readonly action: string;
  /**
  * TGW ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#id VisualTransit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of TGW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#name VisualTransit#name}
  */
  readonly name?: string;
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#connection VisualTransit#connection}
  */
  readonly connection?: VisualTransitTransitInputTransitDeploymentTgwsConnection[] | cdktf.IResolvable;
}

export function visualTransitTransitInputTransitDeploymentTgwsToTerraform(struct?: VisualTransitTransitInputTransitDeploymentTgws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    action: cdktf.stringToTerraform(struct!.action),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    connection: cdktf.listMapper(visualTransitTransitInputTransitDeploymentTgwsConnectionToTerraform, true)(struct!.connection),
  }
}


export function visualTransitTransitInputTransitDeploymentTgwsToHclTerraform(struct?: VisualTransitTransitInputTransitDeploymentTgws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection: {
      value: cdktf.listMapperHcl(visualTransitTransitInputTransitDeploymentTgwsConnectionToHclTerraform, true)(struct!.connection),
      isBlock: true,
      type: "list",
      storageClassType: "VisualTransitTransitInputTransitDeploymentTgwsConnectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisualTransitTransitInputTransitDeploymentTgwsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisualTransitTransitInputTransitDeploymentTgws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisualTransitTransitInputTransitDeploymentTgws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._action = undefined;
      this._id = undefined;
      this._name = undefined;
      this._connection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._action = value.action;
      this._id = value.id;
      this._name = value.name;
      this._connection.internalValue = value.connection;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

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

  // id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new VisualTransitTransitInputTransitDeploymentTgwsConnectionList(this, "connection", false);
  public get connection() {
    return this._connection;
  }
  public putConnection(value: VisualTransitTransitInputTransitDeploymentTgwsConnection[] | cdktf.IResolvable) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }
}

export class VisualTransitTransitInputTransitDeploymentTgwsList extends cdktf.ComplexList {
  public internalValue? : VisualTransitTransitInputTransitDeploymentTgws[] | cdktf.IResolvable

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
  public get(index: number): VisualTransitTransitInputTransitDeploymentTgwsOutputReference {
    return new VisualTransitTransitInputTransitDeploymentTgwsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisualTransitTransitInputTransitDeploymentVhubsConnection {
  /**
  * Connection Action, e.g: ADD, DEL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#action VisualTransit#action}
  */
  readonly action: string;
  /**
  * Name of VNET if connection type is VNET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#name VisualTransit#name}
  */
  readonly name?: string;
  /**
  * Type of connection, e.g: EDGE, VNET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#type VisualTransit#type}
  */
  readonly type: string;
}

export function visualTransitTransitInputTransitDeploymentVhubsConnectionToTerraform(struct?: VisualTransitTransitInputTransitDeploymentVhubsConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function visualTransitTransitInputTransitDeploymentVhubsConnectionToHclTerraform(struct?: VisualTransitTransitInputTransitDeploymentVhubsConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisualTransitTransitInputTransitDeploymentVhubsConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisualTransitTransitInputTransitDeploymentVhubsConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisualTransitTransitInputTransitDeploymentVhubsConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._type = value.type;
    }
  }

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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class VisualTransitTransitInputTransitDeploymentVhubsConnectionList extends cdktf.ComplexList {
  public internalValue? : VisualTransitTransitInputTransitDeploymentVhubsConnection[] | cdktf.IResolvable

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
  public get(index: number): VisualTransitTransitInputTransitDeploymentVhubsConnectionOutputReference {
    return new VisualTransitTransitInputTransitDeploymentVhubsConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisualTransitTransitInputTransitDeploymentVhubs {
  /**
  * Azure account Details: Applicable while creating a new vHUB  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#account VisualTransit#account}
  */
  readonly account?: string;
  /**
  * Action on VHUB, e.g: ADD, MOD, DEL. ADD action would create a new vHUB 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#action VisualTransit#action}
  */
  readonly action: string;
  /**
  * Address space of vHUB, Applicable while creating a new vHUB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#address_space VisualTransit#address_space}
  */
  readonly addressSpace?: string;
  /**
  * Name of VHUB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#name VisualTransit#name}
  */
  readonly name: string;
  /**
  * vWAN Details, Applicable while creating a new vHUB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#vwan VisualTransit#vwan}
  */
  readonly vwan?: string;
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#connection VisualTransit#connection}
  */
  readonly connection?: VisualTransitTransitInputTransitDeploymentVhubsConnection[] | cdktf.IResolvable;
}

export function visualTransitTransitInputTransitDeploymentVhubsToTerraform(struct?: VisualTransitTransitInputTransitDeploymentVhubs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    action: cdktf.stringToTerraform(struct!.action),
    address_space: cdktf.stringToTerraform(struct!.addressSpace),
    name: cdktf.stringToTerraform(struct!.name),
    vwan: cdktf.stringToTerraform(struct!.vwan),
    connection: cdktf.listMapper(visualTransitTransitInputTransitDeploymentVhubsConnectionToTerraform, true)(struct!.connection),
  }
}


export function visualTransitTransitInputTransitDeploymentVhubsToHclTerraform(struct?: VisualTransitTransitInputTransitDeploymentVhubs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_space: {
      value: cdktf.stringToHclTerraform(struct!.addressSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vwan: {
      value: cdktf.stringToHclTerraform(struct!.vwan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection: {
      value: cdktf.listMapperHcl(visualTransitTransitInputTransitDeploymentVhubsConnectionToHclTerraform, true)(struct!.connection),
      isBlock: true,
      type: "list",
      storageClassType: "VisualTransitTransitInputTransitDeploymentVhubsConnectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisualTransitTransitInputTransitDeploymentVhubsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisualTransitTransitInputTransitDeploymentVhubs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._addressSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressSpace = this._addressSpace;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vwan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vwan = this._vwan;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisualTransitTransitInputTransitDeploymentVhubs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._action = undefined;
      this._addressSpace = undefined;
      this._name = undefined;
      this._vwan = undefined;
      this._connection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._action = value.action;
      this._addressSpace = value.addressSpace;
      this._name = value.name;
      this._vwan = value.vwan;
      this._connection.internalValue = value.connection;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

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

  // address_space - computed: false, optional: true, required: false
  private _addressSpace?: string; 
  public get addressSpace() {
    return this.getStringAttribute('address_space');
  }
  public set addressSpace(value: string) {
    this._addressSpace = value;
  }
  public resetAddressSpace() {
    this._addressSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSpaceInput() {
    return this._addressSpace;
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

  // vwan - computed: false, optional: true, required: false
  private _vwan?: string; 
  public get vwan() {
    return this.getStringAttribute('vwan');
  }
  public set vwan(value: string) {
    this._vwan = value;
  }
  public resetVwan() {
    this._vwan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vwanInput() {
    return this._vwan;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new VisualTransitTransitInputTransitDeploymentVhubsConnectionList(this, "connection", false);
  public get connection() {
    return this._connection;
  }
  public putConnection(value: VisualTransitTransitInputTransitDeploymentVhubsConnection[] | cdktf.IResolvable) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }
}

export class VisualTransitTransitInputTransitDeploymentVhubsList extends cdktf.ComplexList {
  public internalValue? : VisualTransitTransitInputTransitDeploymentVhubs[] | cdktf.IResolvable

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
  public get(index: number): VisualTransitTransitInputTransitDeploymentVhubsOutputReference {
    return new VisualTransitTransitInputTransitDeploymentVhubsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisualTransitTransitInputTransitDeploymentVnets {
  /**
  * Action on VNET, e.g: ADD, DEL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#action VisualTransit#action}
  */
  readonly action: string;
  /**
  * Name of VNET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#name VisualTransit#name}
  */
  readonly name: string;
}

export function visualTransitTransitInputTransitDeploymentVnetsToTerraform(struct?: VisualTransitTransitInputTransitDeploymentVnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function visualTransitTransitInputTransitDeploymentVnetsToHclTerraform(struct?: VisualTransitTransitInputTransitDeploymentVnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisualTransitTransitInputTransitDeploymentVnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisualTransitTransitInputTransitDeploymentVnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisualTransitTransitInputTransitDeploymentVnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
    }
  }

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
}

export class VisualTransitTransitInputTransitDeploymentVnetsList extends cdktf.ComplexList {
  public internalValue? : VisualTransitTransitInputTransitDeploymentVnets[] | cdktf.IResolvable

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
  public get(index: number): VisualTransitTransitInputTransitDeploymentVnetsOutputReference {
    return new VisualTransitTransitInputTransitDeploymentVnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisualTransitTransitInputTransitDeploymentVpcs {
  /**
  * Action on VPC, e.g: ADD, DEL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#action VisualTransit#action}
  */
  readonly action: string;
  /**
  * Name of VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#name VisualTransit#name}
  */
  readonly name: string;
}

export function visualTransitTransitInputTransitDeploymentVpcsToTerraform(struct?: VisualTransitTransitInputTransitDeploymentVpcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function visualTransitTransitInputTransitDeploymentVpcsToHclTerraform(struct?: VisualTransitTransitInputTransitDeploymentVpcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisualTransitTransitInputTransitDeploymentVpcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisualTransitTransitInputTransitDeploymentVpcs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisualTransitTransitInputTransitDeploymentVpcs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
    }
  }

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
}

export class VisualTransitTransitInputTransitDeploymentVpcsList extends cdktf.ComplexList {
  public internalValue? : VisualTransitTransitInputTransitDeploymentVpcs[] | cdktf.IResolvable

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
  public get(index: number): VisualTransitTransitInputTransitDeploymentVpcsOutputReference {
    return new VisualTransitTransitInputTransitDeploymentVpcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisualTransitTransitInputTransitDeployment {
  /**
  * tgws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#tgws VisualTransit#tgws}
  */
  readonly tgws?: VisualTransitTransitInputTransitDeploymentTgws[] | cdktf.IResolvable;
  /**
  * vhubs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#vhubs VisualTransit#vhubs}
  */
  readonly vhubs?: VisualTransitTransitInputTransitDeploymentVhubs[] | cdktf.IResolvable;
  /**
  * vnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#vnets VisualTransit#vnets}
  */
  readonly vnets?: VisualTransitTransitInputTransitDeploymentVnets[] | cdktf.IResolvable;
  /**
  * vpcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#vpcs VisualTransit#vpcs}
  */
  readonly vpcs?: VisualTransitTransitInputTransitDeploymentVpcs[] | cdktf.IResolvable;
}

export function visualTransitTransitInputTransitDeploymentToTerraform(struct?: VisualTransitTransitInputTransitDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tgws: cdktf.listMapper(visualTransitTransitInputTransitDeploymentTgwsToTerraform, true)(struct!.tgws),
    vhubs: cdktf.listMapper(visualTransitTransitInputTransitDeploymentVhubsToTerraform, true)(struct!.vhubs),
    vnets: cdktf.listMapper(visualTransitTransitInputTransitDeploymentVnetsToTerraform, true)(struct!.vnets),
    vpcs: cdktf.listMapper(visualTransitTransitInputTransitDeploymentVpcsToTerraform, true)(struct!.vpcs),
  }
}


export function visualTransitTransitInputTransitDeploymentToHclTerraform(struct?: VisualTransitTransitInputTransitDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tgws: {
      value: cdktf.listMapperHcl(visualTransitTransitInputTransitDeploymentTgwsToHclTerraform, true)(struct!.tgws),
      isBlock: true,
      type: "list",
      storageClassType: "VisualTransitTransitInputTransitDeploymentTgwsList",
    },
    vhubs: {
      value: cdktf.listMapperHcl(visualTransitTransitInputTransitDeploymentVhubsToHclTerraform, true)(struct!.vhubs),
      isBlock: true,
      type: "list",
      storageClassType: "VisualTransitTransitInputTransitDeploymentVhubsList",
    },
    vnets: {
      value: cdktf.listMapperHcl(visualTransitTransitInputTransitDeploymentVnetsToHclTerraform, true)(struct!.vnets),
      isBlock: true,
      type: "list",
      storageClassType: "VisualTransitTransitInputTransitDeploymentVnetsList",
    },
    vpcs: {
      value: cdktf.listMapperHcl(visualTransitTransitInputTransitDeploymentVpcsToHclTerraform, true)(struct!.vpcs),
      isBlock: true,
      type: "list",
      storageClassType: "VisualTransitTransitInputTransitDeploymentVpcsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisualTransitTransitInputTransitDeploymentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisualTransitTransitInputTransitDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tgws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgws = this._tgws?.internalValue;
    }
    if (this._vhubs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vhubs = this._vhubs?.internalValue;
    }
    if (this._vnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnets = this._vnets?.internalValue;
    }
    if (this._vpcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcs = this._vpcs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisualTransitTransitInputTransitDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tgws.internalValue = undefined;
      this._vhubs.internalValue = undefined;
      this._vnets.internalValue = undefined;
      this._vpcs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tgws.internalValue = value.tgws;
      this._vhubs.internalValue = value.vhubs;
      this._vnets.internalValue = value.vnets;
      this._vpcs.internalValue = value.vpcs;
    }
  }

  // tgws - computed: false, optional: true, required: false
  private _tgws = new VisualTransitTransitInputTransitDeploymentTgwsList(this, "tgws", false);
  public get tgws() {
    return this._tgws;
  }
  public putTgws(value: VisualTransitTransitInputTransitDeploymentTgws[] | cdktf.IResolvable) {
    this._tgws.internalValue = value;
  }
  public resetTgws() {
    this._tgws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwsInput() {
    return this._tgws.internalValue;
  }

  // vhubs - computed: false, optional: true, required: false
  private _vhubs = new VisualTransitTransitInputTransitDeploymentVhubsList(this, "vhubs", false);
  public get vhubs() {
    return this._vhubs;
  }
  public putVhubs(value: VisualTransitTransitInputTransitDeploymentVhubs[] | cdktf.IResolvable) {
    this._vhubs.internalValue = value;
  }
  public resetVhubs() {
    this._vhubs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhubsInput() {
    return this._vhubs.internalValue;
  }

  // vnets - computed: false, optional: true, required: false
  private _vnets = new VisualTransitTransitInputTransitDeploymentVnetsList(this, "vnets", false);
  public get vnets() {
    return this._vnets;
  }
  public putVnets(value: VisualTransitTransitInputTransitDeploymentVnets[] | cdktf.IResolvable) {
    this._vnets.internalValue = value;
  }
  public resetVnets() {
    this._vnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetsInput() {
    return this._vnets.internalValue;
  }

  // vpcs - computed: false, optional: true, required: false
  private _vpcs = new VisualTransitTransitInputTransitDeploymentVpcsList(this, "vpcs", false);
  public get vpcs() {
    return this._vpcs;
  }
  public putVpcs(value: VisualTransitTransitInputTransitDeploymentVpcs[] | cdktf.IResolvable) {
    this._vpcs.internalValue = value;
  }
  public resetVpcs() {
    this._vpcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcsInput() {
    return this._vpcs.internalValue;
  }
}

export class VisualTransitTransitInputTransitDeploymentList extends cdktf.ComplexList {
  public internalValue? : VisualTransitTransitInputTransitDeployment[] | cdktf.IResolvable

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
  public get(index: number): VisualTransitTransitInputTransitDeploymentOutputReference {
    return new VisualTransitTransitInputTransitDeploymentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisualTransitTransitInput {
  /**
  * Cloud Region, e.g: us-east-2, westus 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#cloud_region VisualTransit#cloud_region}
  */
  readonly cloudRegion: string;
  /**
  * Cloud Type, e.g: AWS, AZURE, GCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#cloud_type VisualTransit#cloud_type}
  */
  readonly cloudType: string;
  /**
  * transit_deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#transit_deployment VisualTransit#transit_deployment}
  */
  readonly transitDeployment: VisualTransitTransitInputTransitDeployment[] | cdktf.IResolvable;
}

export function visualTransitTransitInputToTerraform(struct?: VisualTransitTransitInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_region: cdktf.stringToTerraform(struct!.cloudRegion),
    cloud_type: cdktf.stringToTerraform(struct!.cloudType),
    transit_deployment: cdktf.listMapper(visualTransitTransitInputTransitDeploymentToTerraform, true)(struct!.transitDeployment),
  }
}


export function visualTransitTransitInputToHclTerraform(struct?: VisualTransitTransitInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_region: {
      value: cdktf.stringToHclTerraform(struct!.cloudRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_type: {
      value: cdktf.stringToHclTerraform(struct!.cloudType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_deployment: {
      value: cdktf.listMapperHcl(visualTransitTransitInputTransitDeploymentToHclTerraform, true)(struct!.transitDeployment),
      isBlock: true,
      type: "set",
      storageClassType: "VisualTransitTransitInputTransitDeploymentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisualTransitTransitInputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisualTransitTransitInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudRegion = this._cloudRegion;
    }
    if (this._cloudType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudType = this._cloudType;
    }
    if (this._transitDeployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitDeployment = this._transitDeployment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisualTransitTransitInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudRegion = undefined;
      this._cloudType = undefined;
      this._transitDeployment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudRegion = value.cloudRegion;
      this._cloudType = value.cloudType;
      this._transitDeployment.internalValue = value.transitDeployment;
    }
  }

  // cloud_region - computed: false, optional: false, required: true
  private _cloudRegion?: string; 
  public get cloudRegion() {
    return this.getStringAttribute('cloud_region');
  }
  public set cloudRegion(value: string) {
    this._cloudRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRegionInput() {
    return this._cloudRegion;
  }

  // cloud_type - computed: false, optional: false, required: true
  private _cloudType?: string; 
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }
  public set cloudType(value: string) {
    this._cloudType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // transit_deployment - computed: false, optional: false, required: true
  private _transitDeployment = new VisualTransitTransitInputTransitDeploymentList(this, "transit_deployment", true);
  public get transitDeployment() {
    return this._transitDeployment;
  }
  public putTransitDeployment(value: VisualTransitTransitInputTransitDeployment[] | cdktf.IResolvable) {
    this._transitDeployment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitDeploymentInput() {
    return this._transitDeployment.internalValue;
  }
}

export class VisualTransitTransitInputList extends cdktf.ComplexList {
  public internalValue? : VisualTransitTransitInput[] | cdktf.IResolvable

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
  public get(index: number): VisualTransitTransitInputOutputReference {
    return new VisualTransitTransitInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit prosimo_visual_transit}
*/
export class VisualTransit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_visual_transit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisualTransit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisualTransit to import
  * @param importFromId The id of the existing VisualTransit that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisualTransit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_visual_transit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/visual_transit prosimo_visual_transit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisualTransitConfig
  */
  public constructor(scope: Construct, id: string, config: VisualTransitConfig) {
    super(scope, id, {
      terraformResourceType: 'prosimo_visual_transit',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deployTransitSetup = config.deployTransitSetup;
    this._id = config.id;
    this._waitForRollout = config.waitForRollout;
    this._timeouts.internalValue = config.timeouts;
    this._transitInput.internalValue = config.transitInput;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deploy_transit_setup - computed: false, optional: true, required: false
  private _deployTransitSetup?: boolean | cdktf.IResolvable; 
  public get deployTransitSetup() {
    return this.getBooleanAttribute('deploy_transit_setup');
  }
  public set deployTransitSetup(value: boolean | cdktf.IResolvable) {
    this._deployTransitSetup = value;
  }
  public resetDeployTransitSetup() {
    this._deployTransitSetup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployTransitSetupInput() {
    return this._deployTransitSetup;
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

  // wait_for_rollout - computed: false, optional: true, required: false
  private _waitForRollout?: boolean | cdktf.IResolvable; 
  public get waitForRollout() {
    return this.getBooleanAttribute('wait_for_rollout');
  }
  public set waitForRollout(value: boolean | cdktf.IResolvable) {
    this._waitForRollout = value;
  }
  public resetWaitForRollout() {
    this._waitForRollout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRolloutInput() {
    return this._waitForRollout;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VisualTransitTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VisualTransitTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // transit_input - computed: false, optional: false, required: true
  private _transitInput = new VisualTransitTransitInputList(this, "transit_input", false);
  public get transitInput() {
    return this._transitInput;
  }
  public putTransitInput(value: VisualTransitTransitInput[] | cdktf.IResolvable) {
    this._transitInput.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitInputInput() {
    return this._transitInput.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deploy_transit_setup: cdktf.booleanToTerraform(this._deployTransitSetup),
      id: cdktf.stringToTerraform(this._id),
      wait_for_rollout: cdktf.booleanToTerraform(this._waitForRollout),
      timeouts: visualTransitTimeoutsToTerraform(this._timeouts.internalValue),
      transit_input: cdktf.listMapper(visualTransitTransitInputToTerraform, true)(this._transitInput.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deploy_transit_setup: {
        value: cdktf.booleanToHclTerraform(this._deployTransitSetup),
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
      wait_for_rollout: {
        value: cdktf.booleanToHclTerraform(this._waitForRollout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: visualTransitTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VisualTransitTimeouts",
      },
      transit_input: {
        value: cdktf.listMapperHcl(visualTransitTransitInputToHclTerraform, true)(this._transitInput.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisualTransitTransitInputList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
