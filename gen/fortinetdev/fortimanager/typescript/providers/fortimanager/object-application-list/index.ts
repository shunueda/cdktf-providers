// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectApplicationListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#adom ObjectApplicationList#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#app_replacemsg ObjectApplicationList#app_replacemsg}
  */
  readonly appReplacemsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#comment ObjectApplicationList#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#control_default_network_services ObjectApplicationList#control_default_network_services}
  */
  readonly controlDefaultNetworkServices?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#deep_app_inspection ObjectApplicationList#deep_app_inspection}
  */
  readonly deepAppInspection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#dynamic_sort_subtable ObjectApplicationList#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#enforce_default_app_port ObjectApplicationList#enforce_default_app_port}
  */
  readonly enforceDefaultAppPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#extended_log ObjectApplicationList#extended_log}
  */
  readonly extendedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#force_inclusion_ssl_di_sigs ObjectApplicationList#force_inclusion_ssl_di_sigs}
  */
  readonly forceInclusionSslDiSigs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#id ObjectApplicationList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#name ObjectApplicationList#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#options ObjectApplicationList#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#other_application_action ObjectApplicationList#other_application_action}
  */
  readonly otherApplicationAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#other_application_log ObjectApplicationList#other_application_log}
  */
  readonly otherApplicationLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#p2p_black_list ObjectApplicationList#p2p_black_list}
  */
  readonly p2PBlackList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#p2p_block_list ObjectApplicationList#p2p_block_list}
  */
  readonly p2PBlockList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#replacemsg_group ObjectApplicationList#replacemsg_group}
  */
  readonly replacemsgGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#scopetype ObjectApplicationList#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#unknown_application_action ObjectApplicationList#unknown_application_action}
  */
  readonly unknownApplicationAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#unknown_application_log ObjectApplicationList#unknown_application_log}
  */
  readonly unknownApplicationLog?: string;
  /**
  * default_network_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#default_network_services ObjectApplicationList#default_network_services}
  */
  readonly defaultNetworkServices?: ObjectApplicationListDefaultNetworkServices[] | cdktf.IResolvable;
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#entries ObjectApplicationList#entries}
  */
  readonly entries?: ObjectApplicationListEntries[] | cdktf.IResolvable;
}
export interface ObjectApplicationListDefaultNetworkServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#id ObjectApplicationList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#port ObjectApplicationList#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#services ObjectApplicationList#services}
  */
  readonly services?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#violation_action ObjectApplicationList#violation_action}
  */
  readonly violationAction?: string;
}

export function objectApplicationListDefaultNetworkServicesToTerraform(struct?: ObjectApplicationListDefaultNetworkServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    port: cdktf.numberToTerraform(struct!.port),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
    violation_action: cdktf.stringToTerraform(struct!.violationAction),
  }
}


export function objectApplicationListDefaultNetworkServicesToHclTerraform(struct?: ObjectApplicationListDefaultNetworkServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    violation_action: {
      value: cdktf.stringToHclTerraform(struct!.violationAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectApplicationListDefaultNetworkServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectApplicationListDefaultNetworkServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._violationAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.violationAction = this._violationAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectApplicationListDefaultNetworkServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._port = undefined;
      this._services = undefined;
      this._violationAction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._port = value.port;
      this._services = value.services;
      this._violationAction = value.violationAction;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // services - computed: true, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // violation_action - computed: true, optional: true, required: false
  private _violationAction?: string; 
  public get violationAction() {
    return this.getStringAttribute('violation_action');
  }
  public set violationAction(value: string) {
    this._violationAction = value;
  }
  public resetViolationAction() {
    this._violationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationActionInput() {
    return this._violationAction;
  }
}

export class ObjectApplicationListDefaultNetworkServicesList extends cdktf.ComplexList {
  public internalValue? : ObjectApplicationListDefaultNetworkServices[] | cdktf.IResolvable

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
  public get(index: number): ObjectApplicationListDefaultNetworkServicesOutputReference {
    return new ObjectApplicationListDefaultNetworkServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectApplicationListEntriesParametersMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#id ObjectApplicationList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#name ObjectApplicationList#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#value ObjectApplicationList#value}
  */
  readonly value?: string;
}

export function objectApplicationListEntriesParametersMembersToTerraform(struct?: ObjectApplicationListEntriesParametersMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function objectApplicationListEntriesParametersMembersToHclTerraform(struct?: ObjectApplicationListEntriesParametersMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectApplicationListEntriesParametersMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectApplicationListEntriesParametersMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectApplicationListEntriesParametersMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ObjectApplicationListEntriesParametersMembersList extends cdktf.ComplexList {
  public internalValue? : ObjectApplicationListEntriesParametersMembers[] | cdktf.IResolvable

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
  public get(index: number): ObjectApplicationListEntriesParametersMembersOutputReference {
    return new ObjectApplicationListEntriesParametersMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectApplicationListEntriesParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#id ObjectApplicationList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#value ObjectApplicationList#value}
  */
  readonly value?: string;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#members ObjectApplicationList#members}
  */
  readonly members?: ObjectApplicationListEntriesParametersMembers[] | cdktf.IResolvable;
}

export function objectApplicationListEntriesParametersToTerraform(struct?: ObjectApplicationListEntriesParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    value: cdktf.stringToTerraform(struct!.value),
    members: cdktf.listMapper(objectApplicationListEntriesParametersMembersToTerraform, true)(struct!.members),
  }
}


export function objectApplicationListEntriesParametersToHclTerraform(struct?: ObjectApplicationListEntriesParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    members: {
      value: cdktf.listMapperHcl(objectApplicationListEntriesParametersMembersToHclTerraform, true)(struct!.members),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectApplicationListEntriesParametersMembersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectApplicationListEntriesParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectApplicationListEntriesParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectApplicationListEntriesParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._value = undefined;
      this._members.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._value = value.value;
      this._members.internalValue = value.members;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // members - computed: false, optional: true, required: false
  private _members = new ObjectApplicationListEntriesParametersMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: ObjectApplicationListEntriesParametersMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }
}

export class ObjectApplicationListEntriesParametersList extends cdktf.ComplexList {
  public internalValue? : ObjectApplicationListEntriesParameters[] | cdktf.IResolvable

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
  public get(index: number): ObjectApplicationListEntriesParametersOutputReference {
    return new ObjectApplicationListEntriesParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectApplicationListEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#action ObjectApplicationList#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#application ObjectApplicationList#application}
  */
  readonly application?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#behavior ObjectApplicationList#behavior}
  */
  readonly behavior?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#category ObjectApplicationList#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#exclusion ObjectApplicationList#exclusion}
  */
  readonly exclusion?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#id ObjectApplicationList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#log ObjectApplicationList#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#log_packet ObjectApplicationList#log_packet}
  */
  readonly logPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#per_ip_shaper ObjectApplicationList#per_ip_shaper}
  */
  readonly perIpShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#popularity ObjectApplicationList#popularity}
  */
  readonly popularity?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#protocols ObjectApplicationList#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#quarantine ObjectApplicationList#quarantine}
  */
  readonly quarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#quarantine_expiry ObjectApplicationList#quarantine_expiry}
  */
  readonly quarantineExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#quarantine_log ObjectApplicationList#quarantine_log}
  */
  readonly quarantineLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#rate_count ObjectApplicationList#rate_count}
  */
  readonly rateCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#rate_duration ObjectApplicationList#rate_duration}
  */
  readonly rateDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#rate_mode ObjectApplicationList#rate_mode}
  */
  readonly rateMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#rate_track ObjectApplicationList#rate_track}
  */
  readonly rateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#risk ObjectApplicationList#risk}
  */
  readonly risk?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#session_ttl ObjectApplicationList#session_ttl}
  */
  readonly sessionTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#shaper ObjectApplicationList#shaper}
  */
  readonly shaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#shaper_reverse ObjectApplicationList#shaper_reverse}
  */
  readonly shaperReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#sub_category ObjectApplicationList#sub_category}
  */
  readonly subCategory?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#technology ObjectApplicationList#technology}
  */
  readonly technology?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#vendor ObjectApplicationList#vendor}
  */
  readonly vendor?: string[];
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#parameters ObjectApplicationList#parameters}
  */
  readonly parameters?: ObjectApplicationListEntriesParameters[] | cdktf.IResolvable;
}

export function objectApplicationListEntriesToTerraform(struct?: ObjectApplicationListEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    application: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.application),
    behavior: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.behavior),
    category: cdktf.stringToTerraform(struct!.category),
    exclusion: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.exclusion),
    id: cdktf.numberToTerraform(struct!.id),
    log: cdktf.stringToTerraform(struct!.log),
    log_packet: cdktf.stringToTerraform(struct!.logPacket),
    per_ip_shaper: cdktf.stringToTerraform(struct!.perIpShaper),
    popularity: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.popularity),
    protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocols),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
    quarantine_expiry: cdktf.stringToTerraform(struct!.quarantineExpiry),
    quarantine_log: cdktf.stringToTerraform(struct!.quarantineLog),
    rate_count: cdktf.numberToTerraform(struct!.rateCount),
    rate_duration: cdktf.numberToTerraform(struct!.rateDuration),
    rate_mode: cdktf.stringToTerraform(struct!.rateMode),
    rate_track: cdktf.stringToTerraform(struct!.rateTrack),
    risk: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.risk),
    session_ttl: cdktf.numberToTerraform(struct!.sessionTtl),
    shaper: cdktf.stringToTerraform(struct!.shaper),
    shaper_reverse: cdktf.stringToTerraform(struct!.shaperReverse),
    sub_category: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.subCategory),
    technology: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.technology),
    vendor: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vendor),
    parameters: cdktf.listMapper(objectApplicationListEntriesParametersToTerraform, true)(struct!.parameters),
  }
}


export function objectApplicationListEntriesToHclTerraform(struct?: ObjectApplicationListEntries | cdktf.IResolvable): any {
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
    application: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.application),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    behavior: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.behavior),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusion: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.exclusion),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_packet: {
      value: cdktf.stringToHclTerraform(struct!.logPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ip_shaper: {
      value: cdktf.stringToHclTerraform(struct!.perIpShaper),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    popularity: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.popularity),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    quarantine: {
      value: cdktf.stringToHclTerraform(struct!.quarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine_expiry: {
      value: cdktf.stringToHclTerraform(struct!.quarantineExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine_log: {
      value: cdktf.stringToHclTerraform(struct!.quarantineLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_count: {
      value: cdktf.numberToHclTerraform(struct!.rateCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_duration: {
      value: cdktf.numberToHclTerraform(struct!.rateDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_mode: {
      value: cdktf.stringToHclTerraform(struct!.rateMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_track: {
      value: cdktf.stringToHclTerraform(struct!.rateTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    risk: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.risk),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    session_ttl: {
      value: cdktf.numberToHclTerraform(struct!.sessionTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shaper: {
      value: cdktf.stringToHclTerraform(struct!.shaper),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shaper_reverse: {
      value: cdktf.stringToHclTerraform(struct!.shaperReverse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_category: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.subCategory),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    technology: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.technology),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vendor: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vendor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    parameters: {
      value: cdktf.listMapperHcl(objectApplicationListEntriesParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectApplicationListEntriesParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectApplicationListEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectApplicationListEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._exclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._logPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPacket = this._logPacket;
    }
    if (this._perIpShaper !== undefined) {
      hasAnyValues = true;
      internalValueResult.perIpShaper = this._perIpShaper;
    }
    if (this._popularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.popularity = this._popularity;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._quarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantine = this._quarantine;
    }
    if (this._quarantineExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantineExpiry = this._quarantineExpiry;
    }
    if (this._quarantineLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantineLog = this._quarantineLog;
    }
    if (this._rateCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateCount = this._rateCount;
    }
    if (this._rateDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateDuration = this._rateDuration;
    }
    if (this._rateMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateMode = this._rateMode;
    }
    if (this._rateTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateTrack = this._rateTrack;
    }
    if (this._risk !== undefined) {
      hasAnyValues = true;
      internalValueResult.risk = this._risk;
    }
    if (this._sessionTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTtl = this._sessionTtl;
    }
    if (this._shaper !== undefined) {
      hasAnyValues = true;
      internalValueResult.shaper = this._shaper;
    }
    if (this._shaperReverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.shaperReverse = this._shaperReverse;
    }
    if (this._subCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.subCategory = this._subCategory;
    }
    if (this._technology !== undefined) {
      hasAnyValues = true;
      internalValueResult.technology = this._technology;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectApplicationListEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._application = undefined;
      this._behavior = undefined;
      this._category = undefined;
      this._exclusion = undefined;
      this._id = undefined;
      this._log = undefined;
      this._logPacket = undefined;
      this._perIpShaper = undefined;
      this._popularity = undefined;
      this._protocols = undefined;
      this._quarantine = undefined;
      this._quarantineExpiry = undefined;
      this._quarantineLog = undefined;
      this._rateCount = undefined;
      this._rateDuration = undefined;
      this._rateMode = undefined;
      this._rateTrack = undefined;
      this._risk = undefined;
      this._sessionTtl = undefined;
      this._shaper = undefined;
      this._shaperReverse = undefined;
      this._subCategory = undefined;
      this._technology = undefined;
      this._vendor = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._application = value.application;
      this._behavior = value.behavior;
      this._category = value.category;
      this._exclusion = value.exclusion;
      this._id = value.id;
      this._log = value.log;
      this._logPacket = value.logPacket;
      this._perIpShaper = value.perIpShaper;
      this._popularity = value.popularity;
      this._protocols = value.protocols;
      this._quarantine = value.quarantine;
      this._quarantineExpiry = value.quarantineExpiry;
      this._quarantineLog = value.quarantineLog;
      this._rateCount = value.rateCount;
      this._rateDuration = value.rateDuration;
      this._rateMode = value.rateMode;
      this._rateTrack = value.rateTrack;
      this._risk = value.risk;
      this._sessionTtl = value.sessionTtl;
      this._shaper = value.shaper;
      this._shaperReverse = value.shaperReverse;
      this._subCategory = value.subCategory;
      this._technology = value.technology;
      this._vendor = value.vendor;
      this._parameters.internalValue = value.parameters;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // application - computed: true, optional: true, required: false
  private _application?: number[]; 
  public get application() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('application')));
  }
  public set application(value: number[]) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // behavior - computed: true, optional: true, required: false
  private _behavior?: string[]; 
  public get behavior() {
    return cdktf.Fn.tolist(this.getListAttribute('behavior'));
  }
  public set behavior(value: string[]) {
    this._behavior = value;
  }
  public resetBehavior() {
    this._behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // exclusion - computed: true, optional: true, required: false
  private _exclusion?: number[]; 
  public get exclusion() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('exclusion')));
  }
  public set exclusion(value: number[]) {
    this._exclusion = value;
  }
  public resetExclusion() {
    this._exclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // log_packet - computed: true, optional: true, required: false
  private _logPacket?: string; 
  public get logPacket() {
    return this.getStringAttribute('log_packet');
  }
  public set logPacket(value: string) {
    this._logPacket = value;
  }
  public resetLogPacket() {
    this._logPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPacketInput() {
    return this._logPacket;
  }

  // per_ip_shaper - computed: false, optional: true, required: false
  private _perIpShaper?: string; 
  public get perIpShaper() {
    return this.getStringAttribute('per_ip_shaper');
  }
  public set perIpShaper(value: string) {
    this._perIpShaper = value;
  }
  public resetPerIpShaper() {
    this._perIpShaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perIpShaperInput() {
    return this._perIpShaper;
  }

  // popularity - computed: true, optional: true, required: false
  private _popularity?: string[]; 
  public get popularity() {
    return cdktf.Fn.tolist(this.getListAttribute('popularity'));
  }
  public set popularity(value: string[]) {
    this._popularity = value;
  }
  public resetPopularity() {
    this._popularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popularityInput() {
    return this._popularity;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // quarantine - computed: true, optional: true, required: false
  private _quarantine?: string; 
  public get quarantine() {
    return this.getStringAttribute('quarantine');
  }
  public set quarantine(value: string) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }

  // quarantine_expiry - computed: true, optional: true, required: false
  private _quarantineExpiry?: string; 
  public get quarantineExpiry() {
    return this.getStringAttribute('quarantine_expiry');
  }
  public set quarantineExpiry(value: string) {
    this._quarantineExpiry = value;
  }
  public resetQuarantineExpiry() {
    this._quarantineExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineExpiryInput() {
    return this._quarantineExpiry;
  }

  // quarantine_log - computed: true, optional: true, required: false
  private _quarantineLog?: string; 
  public get quarantineLog() {
    return this.getStringAttribute('quarantine_log');
  }
  public set quarantineLog(value: string) {
    this._quarantineLog = value;
  }
  public resetQuarantineLog() {
    this._quarantineLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineLogInput() {
    return this._quarantineLog;
  }

  // rate_count - computed: false, optional: true, required: false
  private _rateCount?: number; 
  public get rateCount() {
    return this.getNumberAttribute('rate_count');
  }
  public set rateCount(value: number) {
    this._rateCount = value;
  }
  public resetRateCount() {
    this._rateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateCountInput() {
    return this._rateCount;
  }

  // rate_duration - computed: true, optional: true, required: false
  private _rateDuration?: number; 
  public get rateDuration() {
    return this.getNumberAttribute('rate_duration');
  }
  public set rateDuration(value: number) {
    this._rateDuration = value;
  }
  public resetRateDuration() {
    this._rateDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateDurationInput() {
    return this._rateDuration;
  }

  // rate_mode - computed: true, optional: true, required: false
  private _rateMode?: string; 
  public get rateMode() {
    return this.getStringAttribute('rate_mode');
  }
  public set rateMode(value: string) {
    this._rateMode = value;
  }
  public resetRateMode() {
    this._rateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateModeInput() {
    return this._rateMode;
  }

  // rate_track - computed: true, optional: true, required: false
  private _rateTrack?: string; 
  public get rateTrack() {
    return this.getStringAttribute('rate_track');
  }
  public set rateTrack(value: string) {
    this._rateTrack = value;
  }
  public resetRateTrack() {
    this._rateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateTrackInput() {
    return this._rateTrack;
  }

  // risk - computed: true, optional: true, required: false
  private _risk?: number[]; 
  public get risk() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('risk')));
  }
  public set risk(value: number[]) {
    this._risk = value;
  }
  public resetRisk() {
    this._risk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskInput() {
    return this._risk;
  }

  // session_ttl - computed: false, optional: true, required: false
  private _sessionTtl?: number; 
  public get sessionTtl() {
    return this.getNumberAttribute('session_ttl');
  }
  public set sessionTtl(value: number) {
    this._sessionTtl = value;
  }
  public resetSessionTtl() {
    this._sessionTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTtlInput() {
    return this._sessionTtl;
  }

  // shaper - computed: false, optional: true, required: false
  private _shaper?: string; 
  public get shaper() {
    return this.getStringAttribute('shaper');
  }
  public set shaper(value: string) {
    this._shaper = value;
  }
  public resetShaper() {
    this._shaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shaperInput() {
    return this._shaper;
  }

  // shaper_reverse - computed: false, optional: true, required: false
  private _shaperReverse?: string; 
  public get shaperReverse() {
    return this.getStringAttribute('shaper_reverse');
  }
  public set shaperReverse(value: string) {
    this._shaperReverse = value;
  }
  public resetShaperReverse() {
    this._shaperReverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shaperReverseInput() {
    return this._shaperReverse;
  }

  // sub_category - computed: true, optional: true, required: false
  private _subCategory?: number[]; 
  public get subCategory() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('sub_category')));
  }
  public set subCategory(value: number[]) {
    this._subCategory = value;
  }
  public resetSubCategory() {
    this._subCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subCategoryInput() {
    return this._subCategory;
  }

  // technology - computed: true, optional: true, required: false
  private _technology?: string[]; 
  public get technology() {
    return cdktf.Fn.tolist(this.getListAttribute('technology'));
  }
  public set technology(value: string[]) {
    this._technology = value;
  }
  public resetTechnology() {
    this._technology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyInput() {
    return this._technology;
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor?: string[]; 
  public get vendor() {
    return cdktf.Fn.tolist(this.getListAttribute('vendor'));
  }
  public set vendor(value: string[]) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ObjectApplicationListEntriesParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ObjectApplicationListEntriesParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class ObjectApplicationListEntriesList extends cdktf.ComplexList {
  public internalValue? : ObjectApplicationListEntries[] | cdktf.IResolvable

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
  public get(index: number): ObjectApplicationListEntriesOutputReference {
    return new ObjectApplicationListEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list fortimanager_object_application_list}
*/
export class ObjectApplicationList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_application_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectApplicationList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectApplicationList to import
  * @param importFromId The id of the existing ObjectApplicationList that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectApplicationList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_application_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list fortimanager_object_application_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectApplicationListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectApplicationListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_application_list',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._appReplacemsg = config.appReplacemsg;
    this._comment = config.comment;
    this._controlDefaultNetworkServices = config.controlDefaultNetworkServices;
    this._deepAppInspection = config.deepAppInspection;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._enforceDefaultAppPort = config.enforceDefaultAppPort;
    this._extendedLog = config.extendedLog;
    this._forceInclusionSslDiSigs = config.forceInclusionSslDiSigs;
    this._id = config.id;
    this._name = config.name;
    this._options = config.options;
    this._otherApplicationAction = config.otherApplicationAction;
    this._otherApplicationLog = config.otherApplicationLog;
    this._p2PBlackList = config.p2PBlackList;
    this._p2PBlockList = config.p2PBlockList;
    this._replacemsgGroup = config.replacemsgGroup;
    this._scopetype = config.scopetype;
    this._unknownApplicationAction = config.unknownApplicationAction;
    this._unknownApplicationLog = config.unknownApplicationLog;
    this._defaultNetworkServices.internalValue = config.defaultNetworkServices;
    this._entries.internalValue = config.entries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // app_replacemsg - computed: true, optional: true, required: false
  private _appReplacemsg?: string; 
  public get appReplacemsg() {
    return this.getStringAttribute('app_replacemsg');
  }
  public set appReplacemsg(value: string) {
    this._appReplacemsg = value;
  }
  public resetAppReplacemsg() {
    this._appReplacemsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appReplacemsgInput() {
    return this._appReplacemsg;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // control_default_network_services - computed: true, optional: true, required: false
  private _controlDefaultNetworkServices?: string; 
  public get controlDefaultNetworkServices() {
    return this.getStringAttribute('control_default_network_services');
  }
  public set controlDefaultNetworkServices(value: string) {
    this._controlDefaultNetworkServices = value;
  }
  public resetControlDefaultNetworkServices() {
    this._controlDefaultNetworkServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlDefaultNetworkServicesInput() {
    return this._controlDefaultNetworkServices;
  }

  // deep_app_inspection - computed: true, optional: true, required: false
  private _deepAppInspection?: string; 
  public get deepAppInspection() {
    return this.getStringAttribute('deep_app_inspection');
  }
  public set deepAppInspection(value: string) {
    this._deepAppInspection = value;
  }
  public resetDeepAppInspection() {
    this._deepAppInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepAppInspectionInput() {
    return this._deepAppInspection;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // enforce_default_app_port - computed: true, optional: true, required: false
  private _enforceDefaultAppPort?: string; 
  public get enforceDefaultAppPort() {
    return this.getStringAttribute('enforce_default_app_port');
  }
  public set enforceDefaultAppPort(value: string) {
    this._enforceDefaultAppPort = value;
  }
  public resetEnforceDefaultAppPort() {
    this._enforceDefaultAppPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceDefaultAppPortInput() {
    return this._enforceDefaultAppPort;
  }

  // extended_log - computed: true, optional: true, required: false
  private _extendedLog?: string; 
  public get extendedLog() {
    return this.getStringAttribute('extended_log');
  }
  public set extendedLog(value: string) {
    this._extendedLog = value;
  }
  public resetExtendedLog() {
    this._extendedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedLogInput() {
    return this._extendedLog;
  }

  // force_inclusion_ssl_di_sigs - computed: true, optional: true, required: false
  private _forceInclusionSslDiSigs?: string; 
  public get forceInclusionSslDiSigs() {
    return this.getStringAttribute('force_inclusion_ssl_di_sigs');
  }
  public set forceInclusionSslDiSigs(value: string) {
    this._forceInclusionSslDiSigs = value;
  }
  public resetForceInclusionSslDiSigs() {
    this._forceInclusionSslDiSigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInclusionSslDiSigsInput() {
    return this._forceInclusionSslDiSigs;
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

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // other_application_action - computed: true, optional: true, required: false
  private _otherApplicationAction?: string; 
  public get otherApplicationAction() {
    return this.getStringAttribute('other_application_action');
  }
  public set otherApplicationAction(value: string) {
    this._otherApplicationAction = value;
  }
  public resetOtherApplicationAction() {
    this._otherApplicationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherApplicationActionInput() {
    return this._otherApplicationAction;
  }

  // other_application_log - computed: true, optional: true, required: false
  private _otherApplicationLog?: string; 
  public get otherApplicationLog() {
    return this.getStringAttribute('other_application_log');
  }
  public set otherApplicationLog(value: string) {
    this._otherApplicationLog = value;
  }
  public resetOtherApplicationLog() {
    this._otherApplicationLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherApplicationLogInput() {
    return this._otherApplicationLog;
  }

  // p2p_black_list - computed: true, optional: true, required: false
  private _p2PBlackList?: string[]; 
  public get p2PBlackList() {
    return cdktf.Fn.tolist(this.getListAttribute('p2p_black_list'));
  }
  public set p2PBlackList(value: string[]) {
    this._p2PBlackList = value;
  }
  public resetP2PBlackList() {
    this._p2PBlackList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2PBlackListInput() {
    return this._p2PBlackList;
  }

  // p2p_block_list - computed: true, optional: true, required: false
  private _p2PBlockList?: string[]; 
  public get p2PBlockList() {
    return cdktf.Fn.tolist(this.getListAttribute('p2p_block_list'));
  }
  public set p2PBlockList(value: string[]) {
    this._p2PBlockList = value;
  }
  public resetP2PBlockList() {
    this._p2PBlockList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2PBlockListInput() {
    return this._p2PBlockList;
  }

  // replacemsg_group - computed: false, optional: true, required: false
  private _replacemsgGroup?: string; 
  public get replacemsgGroup() {
    return this.getStringAttribute('replacemsg_group');
  }
  public set replacemsgGroup(value: string) {
    this._replacemsgGroup = value;
  }
  public resetReplacemsgGroup() {
    this._replacemsgGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacemsgGroupInput() {
    return this._replacemsgGroup;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // unknown_application_action - computed: true, optional: true, required: false
  private _unknownApplicationAction?: string; 
  public get unknownApplicationAction() {
    return this.getStringAttribute('unknown_application_action');
  }
  public set unknownApplicationAction(value: string) {
    this._unknownApplicationAction = value;
  }
  public resetUnknownApplicationAction() {
    this._unknownApplicationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownApplicationActionInput() {
    return this._unknownApplicationAction;
  }

  // unknown_application_log - computed: true, optional: true, required: false
  private _unknownApplicationLog?: string; 
  public get unknownApplicationLog() {
    return this.getStringAttribute('unknown_application_log');
  }
  public set unknownApplicationLog(value: string) {
    this._unknownApplicationLog = value;
  }
  public resetUnknownApplicationLog() {
    this._unknownApplicationLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownApplicationLogInput() {
    return this._unknownApplicationLog;
  }

  // default_network_services - computed: false, optional: true, required: false
  private _defaultNetworkServices = new ObjectApplicationListDefaultNetworkServicesList(this, "default_network_services", false);
  public get defaultNetworkServices() {
    return this._defaultNetworkServices;
  }
  public putDefaultNetworkServices(value: ObjectApplicationListDefaultNetworkServices[] | cdktf.IResolvable) {
    this._defaultNetworkServices.internalValue = value;
  }
  public resetDefaultNetworkServices() {
    this._defaultNetworkServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNetworkServicesInput() {
    return this._defaultNetworkServices.internalValue;
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new ObjectApplicationListEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: ObjectApplicationListEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      app_replacemsg: cdktf.stringToTerraform(this._appReplacemsg),
      comment: cdktf.stringToTerraform(this._comment),
      control_default_network_services: cdktf.stringToTerraform(this._controlDefaultNetworkServices),
      deep_app_inspection: cdktf.stringToTerraform(this._deepAppInspection),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      enforce_default_app_port: cdktf.stringToTerraform(this._enforceDefaultAppPort),
      extended_log: cdktf.stringToTerraform(this._extendedLog),
      force_inclusion_ssl_di_sigs: cdktf.stringToTerraform(this._forceInclusionSslDiSigs),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._options),
      other_application_action: cdktf.stringToTerraform(this._otherApplicationAction),
      other_application_log: cdktf.stringToTerraform(this._otherApplicationLog),
      p2p_black_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._p2PBlackList),
      p2p_block_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._p2PBlockList),
      replacemsg_group: cdktf.stringToTerraform(this._replacemsgGroup),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      unknown_application_action: cdktf.stringToTerraform(this._unknownApplicationAction),
      unknown_application_log: cdktf.stringToTerraform(this._unknownApplicationLog),
      default_network_services: cdktf.listMapper(objectApplicationListDefaultNetworkServicesToTerraform, true)(this._defaultNetworkServices.internalValue),
      entries: cdktf.listMapper(objectApplicationListEntriesToTerraform, true)(this._entries.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_replacemsg: {
        value: cdktf.stringToHclTerraform(this._appReplacemsg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_default_network_services: {
        value: cdktf.stringToHclTerraform(this._controlDefaultNetworkServices),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deep_app_inspection: {
        value: cdktf.stringToHclTerraform(this._deepAppInspection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_default_app_port: {
        value: cdktf.stringToHclTerraform(this._enforceDefaultAppPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_log: {
        value: cdktf.stringToHclTerraform(this._extendedLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_inclusion_ssl_di_sigs: {
        value: cdktf.stringToHclTerraform(this._forceInclusionSslDiSigs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._options),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      other_application_action: {
        value: cdktf.stringToHclTerraform(this._otherApplicationAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      other_application_log: {
        value: cdktf.stringToHclTerraform(this._otherApplicationLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p2p_black_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._p2PBlackList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      p2p_block_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._p2PBlockList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      replacemsg_group: {
        value: cdktf.stringToHclTerraform(this._replacemsgGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknown_application_action: {
        value: cdktf.stringToHclTerraform(this._unknownApplicationAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknown_application_log: {
        value: cdktf.stringToHclTerraform(this._unknownApplicationLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_network_services: {
        value: cdktf.listMapperHcl(objectApplicationListDefaultNetworkServicesToHclTerraform, true)(this._defaultNetworkServices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectApplicationListDefaultNetworkServicesList",
      },
      entries: {
        value: cdktf.listMapperHcl(objectApplicationListEntriesToHclTerraform, true)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectApplicationListEntriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
