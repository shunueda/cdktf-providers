// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Switchacl8021XConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#description Switchacl8021X#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#dynamic_sort_subtable Switchacl8021X#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#filter_id Switchacl8021X#filter_id}
  */
  readonly filterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#fswid Switchacl8021X#fswid}
  */
  readonly fswid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#id Switchacl8021X#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * access_list_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#access_list_entry Switchacl8021X#access_list_entry}
  */
  readonly accessListEntry?: Switchacl8021XAccessListEntry[] | cdktf.IResolvable;
}
export interface Switchacl8021XAccessListEntryAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#count Switchacl8021X#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#drop Switchacl8021X#drop}
  */
  readonly drop?: string;
}

export function switchacl8021XAccessListEntryActionToTerraform(struct?: Switchacl8021XAccessListEntryActionOutputReference | Switchacl8021XAccessListEntryAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.stringToTerraform(struct!.count),
    drop: cdktf.stringToTerraform(struct!.drop),
  }
}


export function switchacl8021XAccessListEntryActionToHclTerraform(struct?: Switchacl8021XAccessListEntryActionOutputReference | Switchacl8021XAccessListEntryAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop: {
      value: cdktf.stringToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Switchacl8021XAccessListEntryActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Switchacl8021XAccessListEntryAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Switchacl8021XAccessListEntryAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._drop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._drop = value.drop;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // drop - computed: true, optional: true, required: false
  private _drop?: string; 
  public get drop() {
    return this.getStringAttribute('drop');
  }
  public set drop(value: string) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}
export interface Switchacl8021XAccessListEntryClassifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#dst_ip_prefix Switchacl8021X#dst_ip_prefix}
  */
  readonly dstIpPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#dst_mac Switchacl8021X#dst_mac}
  */
  readonly dstMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#ether_type Switchacl8021X#ether_type}
  */
  readonly etherType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#service Switchacl8021X#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#src_ip_prefix Switchacl8021X#src_ip_prefix}
  */
  readonly srcIpPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#src_mac Switchacl8021X#src_mac}
  */
  readonly srcMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#vlan_id Switchacl8021X#vlan_id}
  */
  readonly vlanId?: number;
}

export function switchacl8021XAccessListEntryClassifierToTerraform(struct?: Switchacl8021XAccessListEntryClassifierOutputReference | Switchacl8021XAccessListEntryClassifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_ip_prefix: cdktf.stringToTerraform(struct!.dstIpPrefix),
    dst_mac: cdktf.stringToTerraform(struct!.dstMac),
    ether_type: cdktf.numberToTerraform(struct!.etherType),
    service: cdktf.stringToTerraform(struct!.service),
    src_ip_prefix: cdktf.stringToTerraform(struct!.srcIpPrefix),
    src_mac: cdktf.stringToTerraform(struct!.srcMac),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function switchacl8021XAccessListEntryClassifierToHclTerraform(struct?: Switchacl8021XAccessListEntryClassifierOutputReference | Switchacl8021XAccessListEntryClassifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_ip_prefix: {
      value: cdktf.stringToHclTerraform(struct!.dstIpPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_mac: {
      value: cdktf.stringToHclTerraform(struct!.dstMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ether_type: {
      value: cdktf.numberToHclTerraform(struct!.etherType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ip_prefix: {
      value: cdktf.stringToHclTerraform(struct!.srcIpPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_mac: {
      value: cdktf.stringToHclTerraform(struct!.srcMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Switchacl8021XAccessListEntryClassifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Switchacl8021XAccessListEntryClassifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstIpPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpPrefix = this._dstIpPrefix;
    }
    if (this._dstMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstMac = this._dstMac;
    }
    if (this._etherType !== undefined) {
      hasAnyValues = true;
      internalValueResult.etherType = this._etherType;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._srcIpPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpPrefix = this._srcIpPrefix;
    }
    if (this._srcMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcMac = this._srcMac;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Switchacl8021XAccessListEntryClassifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstIpPrefix = undefined;
      this._dstMac = undefined;
      this._etherType = undefined;
      this._service = undefined;
      this._srcIpPrefix = undefined;
      this._srcMac = undefined;
      this._vlanId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstIpPrefix = value.dstIpPrefix;
      this._dstMac = value.dstMac;
      this._etherType = value.etherType;
      this._service = value.service;
      this._srcIpPrefix = value.srcIpPrefix;
      this._srcMac = value.srcMac;
      this._vlanId = value.vlanId;
    }
  }

  // dst_ip_prefix - computed: true, optional: true, required: false
  private _dstIpPrefix?: string; 
  public get dstIpPrefix() {
    return this.getStringAttribute('dst_ip_prefix');
  }
  public set dstIpPrefix(value: string) {
    this._dstIpPrefix = value;
  }
  public resetDstIpPrefix() {
    this._dstIpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpPrefixInput() {
    return this._dstIpPrefix;
  }

  // dst_mac - computed: true, optional: true, required: false
  private _dstMac?: string; 
  public get dstMac() {
    return this.getStringAttribute('dst_mac');
  }
  public set dstMac(value: string) {
    this._dstMac = value;
  }
  public resetDstMac() {
    this._dstMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstMacInput() {
    return this._dstMac;
  }

  // ether_type - computed: true, optional: true, required: false
  private _etherType?: number; 
  public get etherType() {
    return this.getNumberAttribute('ether_type');
  }
  public set etherType(value: number) {
    this._etherType = value;
  }
  public resetEtherType() {
    this._etherType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etherTypeInput() {
    return this._etherType;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // src_ip_prefix - computed: true, optional: true, required: false
  private _srcIpPrefix?: string; 
  public get srcIpPrefix() {
    return this.getStringAttribute('src_ip_prefix');
  }
  public set srcIpPrefix(value: string) {
    this._srcIpPrefix = value;
  }
  public resetSrcIpPrefix() {
    this._srcIpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpPrefixInput() {
    return this._srcIpPrefix;
  }

  // src_mac - computed: true, optional: true, required: false
  private _srcMac?: string; 
  public get srcMac() {
    return this.getStringAttribute('src_mac');
  }
  public set srcMac(value: string) {
    this._srcMac = value;
  }
  public resetSrcMac() {
    this._srcMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMacInput() {
    return this._srcMac;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}
export interface Switchacl8021XAccessListEntry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#description Switchacl8021X#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#group Switchacl8021X#group}
  */
  readonly group?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#id Switchacl8021X#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#action Switchacl8021X#action}
  */
  readonly action?: Switchacl8021XAccessListEntryAction;
  /**
  * classifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#classifier Switchacl8021X#classifier}
  */
  readonly classifier?: Switchacl8021XAccessListEntryClassifier;
}

export function switchacl8021XAccessListEntryToTerraform(struct?: Switchacl8021XAccessListEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    group: cdktf.numberToTerraform(struct!.group),
    id: cdktf.numberToTerraform(struct!.id),
    action: switchacl8021XAccessListEntryActionToTerraform(struct!.action),
    classifier: switchacl8021XAccessListEntryClassifierToTerraform(struct!.classifier),
  }
}


export function switchacl8021XAccessListEntryToHclTerraform(struct?: Switchacl8021XAccessListEntry | cdktf.IResolvable): any {
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
    group: {
      value: cdktf.numberToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action: {
      value: switchacl8021XAccessListEntryActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "Switchacl8021XAccessListEntryActionList",
    },
    classifier: {
      value: switchacl8021XAccessListEntryClassifierToHclTerraform(struct!.classifier),
      isBlock: true,
      type: "list",
      storageClassType: "Switchacl8021XAccessListEntryClassifierList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Switchacl8021XAccessListEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Switchacl8021XAccessListEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._classifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classifier = this._classifier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Switchacl8021XAccessListEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._group = undefined;
      this._id = undefined;
      this._action.internalValue = undefined;
      this._classifier.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._group = value.group;
      this._id = value.id;
      this._action.internalValue = value.action;
      this._classifier.internalValue = value.classifier;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // group - computed: true, optional: true, required: false
  private _group?: number; 
  public get group() {
    return this.getNumberAttribute('group');
  }
  public set group(value: number) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: true, optional: true, required: false
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

  // action - computed: false, optional: true, required: false
  private _action = new Switchacl8021XAccessListEntryActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: Switchacl8021XAccessListEntryAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // classifier - computed: false, optional: true, required: false
  private _classifier = new Switchacl8021XAccessListEntryClassifierOutputReference(this, "classifier");
  public get classifier() {
    return this._classifier;
  }
  public putClassifier(value: Switchacl8021XAccessListEntryClassifier) {
    this._classifier.internalValue = value;
  }
  public resetClassifier() {
    this._classifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classifierInput() {
    return this._classifier.internalValue;
  }
}

export class Switchacl8021XAccessListEntryList extends cdktf.ComplexList {
  public internalValue? : Switchacl8021XAccessListEntry[] | cdktf.IResolvable

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
  public get(index: number): Switchacl8021XAccessListEntryOutputReference {
    return new Switchacl8021XAccessListEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x fortiswitch_switchacl_8021X}
*/
export class Switchacl8021X extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switchacl_8021X";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Switchacl8021X resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Switchacl8021X to import
  * @param importFromId The id of the existing Switchacl8021X that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Switchacl8021X to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switchacl_8021X", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_8021_x fortiswitch_switchacl_8021X} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Switchacl8021XConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Switchacl8021XConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switchacl_8021X',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._filterId = config.filterId;
    this._fswid = config.fswid;
    this._id = config.id;
    this._accessListEntry.internalValue = config.accessListEntry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // filter_id - computed: true, optional: true, required: false
  private _filterId?: string; 
  public get filterId() {
    return this.getStringAttribute('filter_id');
  }
  public set filterId(value: string) {
    this._filterId = value;
  }
  public resetFilterId() {
    this._filterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIdInput() {
    return this._filterId;
  }

  // fswid - computed: true, optional: true, required: false
  private _fswid?: number; 
  public get fswid() {
    return this.getNumberAttribute('fswid');
  }
  public set fswid(value: number) {
    this._fswid = value;
  }
  public resetFswid() {
    this._fswid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fswidInput() {
    return this._fswid;
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

  // access_list_entry - computed: false, optional: true, required: false
  private _accessListEntry = new Switchacl8021XAccessListEntryList(this, "access_list_entry", false);
  public get accessListEntry() {
    return this._accessListEntry;
  }
  public putAccessListEntry(value: Switchacl8021XAccessListEntry[] | cdktf.IResolvable) {
    this._accessListEntry.internalValue = value;
  }
  public resetAccessListEntry() {
    this._accessListEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListEntryInput() {
    return this._accessListEntry.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      filter_id: cdktf.stringToTerraform(this._filterId),
      fswid: cdktf.numberToTerraform(this._fswid),
      id: cdktf.stringToTerraform(this._id),
      access_list_entry: cdktf.listMapper(switchacl8021XAccessListEntryToTerraform, true)(this._accessListEntry.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      filter_id: {
        value: cdktf.stringToHclTerraform(this._filterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fswid: {
        value: cdktf.numberToHclTerraform(this._fswid),
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
      access_list_entry: {
        value: cdktf.listMapperHcl(switchacl8021XAccessListEntryToHclTerraform, true)(this._accessListEntry.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Switchacl8021XAccessListEntryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
